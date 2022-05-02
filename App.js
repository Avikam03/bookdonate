// import * as React from 'react';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function VerifyScreen({ navigation }) {
  const [number, onChangeNumber] = React.useState(null); 
  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.viewtemplate}>
      <View style={styles.centerview}>
        <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>verify your phone number!</Text>
        <TextInput
          style={styles.datainput}
          onChangeText={onChangeNumber}
          autoFocus={true}
          value={number}
          placeholder="Enter the OTP you just received"
          placeholderTextColor="#000" 
          keyboardType="numeric"
        />
        <Pressable style={styles.button} onPress={() => navigation.navigate('Verify')}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
      

      

    </SafeAreaView>
    </>
  );
}


function LoginScreen({ navigation }) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null); 
  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.viewtemplate}>
      <View style={styles.centerview}>
        <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>sign up / log in</Text>
      </View>

      <Text style={styles.titleinput}>Phone Number</Text>
      
      <View style={styles.centerview}>
        <TextInput
          style={styles.datainput}
          onChangeText={onChangeNumber}
          autoFocus={true}
          value={number}
          placeholder="Enter your Phone Number"
          placeholderTextColor="#000" 
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        /> */}

        <Pressable style={styles.button} onPress={() => navigation.navigate('Verify')}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>

      </View>

    </SafeAreaView>
    </>
  );
}

var landingsvg = require ('./assets/landing.svg');

function LandingScreen({ navigation }) {
  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.centerview}>

      <Image source={landingsvg} />
        <Text style={{fontSize: 40, fontWeight: '700'}}>
          <Text style={{color: 'white'}}>Book</Text>
          <Text style={{color: '#F9BC60'}}>Don8</Text>
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Get Started</Text>
        </Pressable>  
    </SafeAreaView>
    </>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Landing"
      // screenOptions={({ route, navigation }) => ({
      //   headerShown: false,
      //   gestureEnabled: true,
      // })}
      >
        <Stack.Screen name="Landing" component={LandingScreen} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
      </Stack.Navigator>
    {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: '10%',
    marginTop: '5%',
    marginBottom: '10%'
  },
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
    marginVertical: '10%'
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
    backgroundColor: '#ABD1C6',
    borderRadius: 15,
    color: 'black',
  },
  titleinput: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    marginHorizontal: '10%',
  },

});
