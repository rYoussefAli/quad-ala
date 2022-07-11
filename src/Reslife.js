import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NotificationsScreen } from './NotificationsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TripBox } from './TripBox';
import { ScrollView } from 'react-native-gesture-handler';


export function ReslifeScreen({ navigation }) {


    const styles = StyleSheet.create({


        container: {
            flex: 1,
            //backgroundColor: '#12181f',
            //alignItems: 'center',
            // justifyContent: 'space-around',
            // flexDirection: 'column',
            // alignContent: 'flex-start',
            paddingVertical: 10,
        },
    });


    return (


        <View style={styles.container}>



            <View style={{
                flex: 1,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                width: "100%",
                position: 'absolute',
                bottom: 22,

            }}>
                <Text style={{ margin: 10, fontSize: 24, color: "#000", }}>Powered by Arakhno</Text>
            </View>


        </View>


    );



}