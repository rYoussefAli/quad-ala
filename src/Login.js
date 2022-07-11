import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button, Image, Icon, useWindowDimensions, ScrollView, ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";

import { InputValidation } from './InputValidation';

// MAKE FIREBASE ERRORS MODULE TO INCLUDE/DEAL WITH ALL/MOST OF THE ERRORS


export const Login = ({ navigation }) => {

    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')

    const [userErrorEmail, setUserErrorEmail] = useState(false);
    const [userErrorPass, setUserErrorPass] = useState(false);

    const [userEmailConfirm, setUserEmailConfirm] = useState(false);

    const [loginState, setLoginState] = useState(false);



    const [emailOK, setEmailOK] = useState(false);
    const [passOK, setPassOK] = useState(false);
    let a, b;


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("MainAppContainter");
            }
        })
        return unsub
    }, [])





    const resetPass = (err) => {
        //auth/wrong-password
        if (err.code == "auth/wrong-password") {

            if (Platform.OS == 'android') {

                Alert.alert("Oops", "It seems that you have registered before but you did not put the same password as the last time.\n\nDo you remember your password?", [
                    {
                        text: "Reset password",
                        onPress: () => {
                            // Reset password function
                            console.log("Password need reset")
                            sendPasswordResetEmail(auth, Email)
                            setUserEmailConfirm(true)
                        }


                    },
                    {
                        text: "Try again",
                        onPress: () => {
                            null

                        }
                    }
                ])
            }

            else if (Platform.OS == 'web') {

                null
            }

        }
    }

    const handleLogin = (err) => {
        console.log("Loginentereddd")
        if (err.code == "auth/email-already-in-use") {

                signInWithEmailAndPassword(auth, Email, Pass)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    console.log('Login Done', user.email)
                    //user.updateProfile({displayName: "Youssef A."})
                })
                .catch(err2 => resetPass(err2))
        }
        else {
            alert(err)
            console.log("else error")
        }
        // "auth/email-already-in-use"

    }

    const handleSignUp = (Email_, Pass_) => {
        console.log("Signup pass");

        
            createUserWithEmailAndPassword(auth, Email_, Pass_)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Sign up Done', user.email)
            })
            .catch(err => handleLogin(err))

    }


    const validation = () => {
        setLoginState(true)
        Keyboard.dismiss()

        setEmail(Email.trim());
        console.log("EMAIL TRIMMED")

        // InputValidation(Email, Pass)

        const strongRegex = RegExp("^[a-zA-Z0-9_.+-]+@alastudents\.org+$")

        if (strongRegex.test(Email) || Email === 'aliyoussef200399@gmail.com') {
            console.log("EMAIL OK")
            setUserErrorEmail(false)
            setEmailOK(true)
        }
        else {
            console.log("EMAIL NOT OK")
            setUserErrorEmail(true)
            Alert.alert('Mmm', 'It seems that you are not an ALA student. Please use your issued @alastudents.org email if available.', [
                {
                    text: "I am an ALA student",
                    onPress: () => {
                        setLoginState(false)
                    }

                },
                {
                    text: "I am not",
                    onPress: () => {
                        // GO TO A PAGE (KNOW THE TEAM and how to subscribe)
                        console.log("NON ALA STUDENT");
                        setLoginState(false);
                        navigation.navigate("whoTeam");


                    }
                }
            ])
        }

        if (Pass.length < 6) {
            console.log("PASS NOT OK")
            setUserErrorPass(true)
            setLoginState(false);
        }
        else {
            console.log("PASS OK")
            setUserErrorPass(false)
            setPassOK(true)
        }

        if (emailOK && passOK) {
            console.log("EMAIL+PASS = OK")
            handleSignUp(Email, Pass)
        }
        else {
            console.log("Kosom Elde7k")
        }




    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <View>
                <Image
                    source={require('./quad-dark.jpg')}
                    style={{
                        width: 250,
                        height: 100,
                        position: "relative",
                        marginBottom: "20%",
                        display: 'flex'
                    }}
                />
            </View>
            <View style={{ width: "80%", marginBottom: 0, marginTop: 0, }}>
                <Text style={(userErrorPass) ? styles.errorLabel : { display: 'none' }}>Password must not be less than 6 characters</Text>
            </View>
            <View style={{ width: "80%", marginBottom: 0, marginTop: 0, }}>
                <Text style={(userEmailConfirm) ? styles.confirmLabel : { display: 'none' }}>Confirmation has been sent to your email address</Text>
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    placeholder='Enter your @alastudents.org email'
                    value={Email}
                    onChangeText={text => setEmail(text)}
                    style={userErrorEmail ? [styles.input, styles.errorText] : styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoComplete='email'
                    onFocus={() => {
                        if (userErrorEmail) { setUserErrorEmail(false) }

                    }}
                //////////////////// checkkk

                >

                </TextInput>


                <TextInput
                    placeholder='Enter the password'
                    value={Pass}
                    onChangeText={text => setPass(text)}
                    style={
                        userErrorPass ? [styles.input, styles.errorText]
                            : styles.input}
                    autoCapitalize='none'
                    autoComplete='password'
                    onFocus={() => {
                        if (userErrorPass) { setUserErrorPass(false) }

                    }}
                    secureTextEntry
                >

                </TextInput>

            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPressIn={validation}
                    onPress={validation}
                    style={styles.button}
                //disabled={loginState}
                >
                    <Text style={styles.buttontext}>Join us!</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.infoBarContainer}>
                <View style={styles.infoBarInnerContainer}>
                    <Text style={styles.infoBarText}>Made with ♥ by Arakhno | </Text>
                    <Text
                        style={[styles.infoBarText, styles.whoText]}
                        onPress={() => {
                            navigation.navigate("whoTeam")
                        }}>Who are we</Text>
                </View>
            </View>


            <StatusBar style='light' />
        </KeyboardAvoidingView>

    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#12181f",


    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15,

    },

    inputBox: {
        width: "80%",
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: "#009874",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttontext: {
        fontWeight: 'bold',
        color: '#fff',
    },
    errorText: {
        borderColor: 'red',
        borderWidth: 1,
    },
    confirmLabel: {
        color: '#00dd00',
        fontSize: 14,
        fontWeight: '900',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    errorLabel: {
        color: '#dd0000',
        fontSize: 14,
        fontWeight: '900',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    infoBarText: {
        fontWeight: '400',
        color: '#fff',
        fontSize: 15,

    },
    whoText: {
        textDecorationLine: 'underline',

    },

    infoBarContainer: {
        width: '80%',
        justifyContent: 'center',
        position: 'absolute',
        flexDirection: 'row',
        bottom: 10,
    },
    infoBarInnerContainer: {
        flexDirection: 'row',
    },
})