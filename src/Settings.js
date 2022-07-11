import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NotificationsScreen } from './NotificationsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth, db, firebase } from './Firebase';


export function SettingsScreen({navigation}) {

    const handleSignOut = () => {


        auth
            .signOut()
            .then(() => {
                navigation.replace('LoginContainer')
            })
            .catch(err => alert(err.message))
    }




    const styles = StyleSheet.create({


        container: {
            flex: 1,
            backgroundColor: '#242526',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });


    return (



        <View style={styles.container}>
            <View style={{
                flex: 1,
                backgroundColor: '#705',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: "10%",
                width: "100%",
                height: "8%",
            }}
            // onPress={() => {
                
                
            //     db.collection("users").doc("k6vmx6EJAyQEUwxPcy1G").get().then(doc => {console.log(doc.data())}
            //     , "DONE")}}>
            >
                <Text style={{ fontSize: 24 }}
                onPress={() => {
                    db.collection("users").doc("111").get().then(doc => {if (!doc.data()){
                        db.collection("users").doc("111").set({
                            Name: 'try ya habib a5ok',
                            Age: 69,
                        })
                    }});
                    //for (let i = 0;i<3;i++) db.collection("users").doc("k6vmx6EJAyQEUwxPcy1G").update({Age:  firebase.firestore.FieldValue.increment(1)});
                    //db.collection("users").doc("k6vmx6EJAyQEUwxPcy1G").get().then(doc => {console.log(doc.data(), "\n_________\n")});

                
                }}
                
                >SETTINGS</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: "10%",
                left: 0,
                width: "100%",

            }}>
                <TouchableOpacity onPress={handleSignOut}>
                    <Text style={{ margin: 10, fontSize: 24, color: "#fff", }}>SIGN OUT</Text>
                </TouchableOpacity></View>
            <StatusBar style="light" />
        </View >





    );



}