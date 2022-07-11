import { StyleSheet, Text, View, Button, TouchableOpacity, Platform, Alert } from 'react-native'
import React, { Component, useState } from 'react'

export const TripBox = ({
    tripName = "School Trip",
    tripType = "Enjoy", //enjoy, money, event
    tripCat = "Explore Joburg",
    tripDate,
    tripDesc = "No description available for this trip.",
    maxSignUp = 240,
    y1 = true,
    y2 = true,


}) => {


    const pickBuddy = () => {
        // CHECK YEAR GROUP + FIRESTORE

    }

    const viewDesc = () => {
        if (Platform.OS === 'android') {
            Alert.alert(tripName, tripDesc, [{}, {}])
        }
        else if (Platform.OS === 'web') {
            // DO the confirm funtion
            confirm()

        }
    }

    return (
        <View style={styles.body}>


            <View style={styles.card}>

                <View style={styles.info}>
                    <View style={styles.tripTypeDiv}>
                        <Text style={styles.tripType}>{tripType}</Text></View>
                    <Text
                        style={[styles.h2, { textTransform: 'uppercase', fontSize: 20, }]}
                    >
                        in 32 DAYS
                    </Text>
                    <TouchableOpacity
                        style={styles.descB}
                        onPress={viewDesc}>
                        <Text style={styles.descT}>View Desciption{" >"}</Text>
                    </TouchableOpacity>
                </View>




                <View style={styles.desc}>
                    {/* <View style={styles.progressContainer}>
                        <View style={styles.progress}>

                        </View>
                        <View style={styles.progressText}>
                            <Text style={styles.progressText}>6/9 Challenges</Text>
                        </View>
                    </View> */}


                    <Text style={styles.h6}>{tripCat}</Text>
                    <View style={styles.tripNameCont}>
                        <Text style={[styles.h2, { color: 'black', marginRight: 30, }]}>{tripName}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={pickBuddy}>
                        <Text style={styles.btnText}>pick a buddy</Text>
                    </TouchableOpacity>



                </View>



            </View>






        </View>
    )

}

const styles = StyleSheet.create({


    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        minHeight: 100,
        margin: 0,
        height: 100,

    },
    card: {
        // box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        flex: 1,
        marginVertical: 20,
        overflow: 'hidden',
        width: 700,
        height: 150,
        shadowColor: '#fff',
        shadowOffset: 1,

        // opacity: 0.6,
        letterSpacing: 1,
        //borderWidth: 3,

        backgroundColor: "#fff",
        borderRadius: 15,
        maxWidth: "95%",
        flexDirection: 'row',
        backgroundColor: "transparent",
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,

    },
    info: {
        //borderWidth: 2,
        width: "35%",
        backgroundColor: "#2A265F",
        minWidth: 140,
        alignItems: 'center',



    },
    desc: {
        //borderWidth: 2,
        width: "100%",
        backgroundColor: "#fff",
    },
    progressContainer: {
        position: "absolute",
        top: 30,
        right: 30,
        textAlign: "right",
        width: 150,

    },
    progress: {
        backgroundColor: "#ddd",
        borderRadius: 3,
        height: 5,
        width: "100%",

    },
    progressText: {
        fontSize: 10,
        opacity: 0.6,
        letterSpacing: 1,


    },
    btn: {
        // box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        // borderWidth: 0,
        // borderRadius: 50,
        // position: "absolute",
        // bottom: 30,
        // right: 30,
        // paddingVertical: 12,
        // paddingHorizontal: 25,
        backgroundColor: "#2A265F",
        width: "32%",
        height: "25%",
        borderRadius: 50,
        //alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        // bottom: "10%",
        // right: "45%",
        bottom: 10,
        right: 150,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 2,


    },
    btnText: {
        color: 'white',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase',
        fontWeight: 'bold',




    },

    h6: {
        opacity: 0.6,
        letterSpacing: 1,
        textTransform: 'uppercase',
        margin: 10,
        marginBottom: 3,


    },
    h2: {
        letterSpacing: 1,
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 0,
        color: 'white',


    },
    tripNameCont: {
        maxWidth: "65%",
    },
    tripType: {
        textTransform: 'uppercase',
        letterSpacing: 1,
        margin: 10,
        marginBottom: 3,
        color: 'white',
        opacity: 0.6,
    },
    tripTypeDiv: {
        width: "100%"
    },
    descB: {
        margin: 10,
        position: "absolute",
        // bottom: "10%",
        bottom: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 1,
        hitSlop: 50,


    },
    descT: {
        fontWeight: '500',
        opacity: 0.60,
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontSize: 10,



    },


})