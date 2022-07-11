import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button, RefreshControl } from 'react-native';
import 'react-native-gesture-handler';
import { TripBox } from './TripBox';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

export default function BookTrips() {
  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={[{ title: 'Title Text', key: 'item1' },
        { title: 'Title Text', key: 'item2' },
        { title: 'Title Text', key: 'item87' },
        { title: 'Title Text', key: 'item54' },
        { title: 'Title Text', key: 'item00' },
        { title: 'Title Text', key: 'item6' }]}
        //style={{minHeight: 100}}
        refreshControl={
          <RefreshControl
            enabled={true}
            //refreshing={true}
            onRefresh={() => { console.log("Lol") }}
          />
        }
        //refreshing={true}
        enabled={true}
        //onRefresh={() =>{console.log("Lol")}}
        renderItem={({ item, index, separators }) => (


          <View
            key={item.key}
            style={{ marginBottom: 32, marginTop: 32 }}
          >

            <TripBox tripName='Rosebank' />


          </View>

        )}
      />



    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    borderWidth: 5,
    borderColor: 'red',
    backgroundColor: '#12181f',
    paddingVertical: 10,
  },
})



/*

<View style={{ width: "90%", height: 150, backgroundColor: 'green', margin: 1 }}></View>

*/