import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';


export default function PreHomeScreen({ navigation }) {
    return (
      <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.viewtemplate}>
        <View style={styles.centerview}>
          <View style={styles.card}>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>I’m Looking to Donate Books!</Text>
            </Pressable>  
          </View>
          <View style={styles.card}>
          <Text style={styles.text}>I’m Looking to Get Used books!</Text>
          </View>
        </View>    
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

    card: {
        backgroundColor: '#E6E6E6',
        width: '80%',
        height: '20%',
        marginVertical: '5%',
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
});