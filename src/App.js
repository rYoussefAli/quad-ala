import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Platform, Button, Image, useWindowDimensions, ScrollView, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { HomeScreen } from './HomeScreen';
import { NotificationsScreen } from './NotificationsScreen';
import { ProfileScreen } from './ProfileScreen';
import { ReslifeScreen } from './Reslife';
import { AcademicsScreen } from './Academics';
import { SettingsScreen } from './Settings';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { DrawerMenu } from './DrawerMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './Login';
import BookTrips from './BookTrips';

export default function App() {

  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const [radiusS, changeradiusS] = useState(50)

  const LoginContaierPage = () => {
    return (
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: { backgroundColor: '#12181f', },
          headerTintColor: '#fff',
          drawerActiveTintColor: '#009874',
          drawerInactiveTintColor: '#fff',
          headerShadowVisible: false,
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} options={styles.loginOP} />
        <Stack.Screen name="whoTeam" component={NotificationsScreen} options={styles.stackWhoTeamOP} />
      </Stack.Navigator>

    )
  }


  const Main = () => {
    const Dimensions = useWindowDimensions();
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerContent={(props) => <DrawerMenu {...props} />}
        screenOptions={{ // APPLY TO ALL SCREENS
          drawerType: 'back',
          swipeEdgeWidth: Dimensions.width / 4.5,
          headerStyle: { backgroundColor: '#12181f' },
          headerTintColor: '#fff',
          drawerActiveTintColor: '#009874',
          drawerInactiveTintColor: '#fff',
          headerShadowVisible: false,
        }} >
        {/* <Drawer.Screen name="Profile" component={ProfileScreen} options={profilestyle} /> */}
        <Drawer.Screen name="HomeScreen" component={HomeScreen} options={styles.mainstyle} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={styles.notificationsOP} />
        <Drawer.Screen name="BookTrips" component={BookTrips} options={styles.booktripsOP} />
        <Drawer.Screen name="Reslife" component={ReslifeScreen} options={styles.reslifeOP} />
        <Drawer.Screen name="Academics" component={AcademicsScreen} options={styles.academicsOP} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={styles.settingsOP} />
      </Drawer.Navigator>


    )
  };

  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Logincontainer'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='LoginContainer' component={LoginContaierPage} />
        <Stack.Screen name='MainAppContainter' component={Main} />
      </Stack.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainstyle: {
    title: 'Welcome to the Quad',
    headerStyle: { backgroundColor: "#12181f", },
    headerTintColor: "#fff",
    headerTitleAlign: 'center',
    headerPressColor: 'red',
    drawerIcon: ({ color }) => (
      <Icon name='home-outline' size={22} color={color} />
    )
  },

  settingsOP: {
    headerTintColor: '#fff',
    drawerIcon: ({ color }) => (
      <Icon name='cog-outline' size={22} color={color} />
    )
  },

  academicsOP: {
    headerTintColor: '#fff',
    drawerIcon: ({ color }) => (
      <Icon name='school-outline' size={22} color={color} />
    )

  },

  notificationsOP: {
    headerTintColor: '#fff',
    drawerIcon: ({ color }) => (
      <Icon name='notifications-outline' size={22} color={color} />
    )
  },
  booktripsOP: {
    title: "Book a Trip",
    headerTintColor: '#fff',
    drawerIcon: ({ color }) => (
      <Icon name='earth-outline' size={22} color={color} />
    ),
    headerRight: () => (
      <View style={{ margin: 10, }}>
        <Button
          onPress={() => alert('This is a button!')}
          title="Refresh"
          color="#009874"

        /></View>
    ),

  },
  reslifeOP: {
    headerTintColor: '#fff',
    drawerIcon: ({ color }) => (
      <Icon name='pulse-outline' size={22} color={color} />
    )
  },

  loginOP: {
    drawerItemStyle: { display: 'none' }, // hide the login screen from the drawer by a simple way
    headerShown: false,
  },
  stackWhoTeamOP: {
    title: "Who are we?",
    headerShown: true,
  }

}
);
