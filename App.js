// import * as React from 'react';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './pages/landing';
import VerifyScreen from './pages/verify';
import LoginScreen from './pages/login';
import PreHomeScreen from './pages/prehome'


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Landing" 
        headerMode="float"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#004643',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="PreHome" component={PreHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  viewtemplate: {
    backgroundColor: '#004643',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  centerview: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#004643',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  //   marginHorizontal: '10%',
  // },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: '78%',
    // height: '8%',
    width: 306,
    height: 59,
    paddingVertical: 12,
    paddingHorizontal: 70,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#F9BC60',
    marginHorizontal: '10%',
    marginVertical: '5%'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  datainput: {
    
    // width: '78%',
    // height: '8%',
    width: 306,
    height: 59,
    padding: 10,
    backgroundColor: '#ABD1C6',
    borderRadius: 15,
    color: 'black',
    marginTop: '5%',
    marginBottom: '5%'
  },
  titleinput: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    // marginBottom: 10,
    marginHorizontal: '10%',
  },

});
