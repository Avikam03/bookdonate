import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function LandingScreen({ navigation }) {
    return (
      <>
      <SafeAreaView style={styles.centerview}>
        <StatusBar
            animated={true}
            barStyle="light-content"
        />
        {/* <Image source={require('../images/landing.svg')} /> */}
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

const styles = StyleSheet.create({
    viewtemplate: {
      backgroundColor: '#004643',
      flex: 1,
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
      marginHorizontal: '10%',
    },
  
  });

