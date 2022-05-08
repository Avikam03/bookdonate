import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';

import Home1Screen from './home1'
import Home2Screen from './home2'

export default function PreHomeScreen({ navigation }) {
    const [name, setname] = useState('John Doe');
    return (
      <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.viewtemplate}>
        <View style={styles.centerview}>
          <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>Hello, {name}</Text>
          <View style={styles.card}>
            <View style={styles.cardimageview}>
              <Image source={require('../images/share1.png')} style={styles.cardImage} /> 
            </View>
            <Pressable onPress={() => navigation.navigate('Home1')}>
              <Text style={styles.text}>I’m Looking to Donate Books!</Text>
            </Pressable>  
          </View>
          <View style={styles.card}>
            <View style={styles.cardimageview}>
              <Image source={require('../images/share2.png')} style={styles.cardImage} />
            </View>
            <Pressable onPress={() => navigation.navigate('Home2')}>
              <Text style={styles.text}>I’m Looking to Get Used books!</Text>
            </Pressable>
          </View>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Manage')}>
              <Text style={styles.text}>Manage Listings</Text>
            </Pressable>
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
        width: '65%',
        height: '30%',
        marginVertical: '5%',
        paddingVertical: '10%',
        paddingHorizontal: '5%',
        borderRadius: 15,
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
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        textAlign:'center'
        
    },
    cardImage: {
      // marginHorizontal: '10%',
      // marginVertical: '5%',
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
    },
    cardimageview: {
      marginHorizontal: '10%',
      // marginVertical: '5%'
    },
});