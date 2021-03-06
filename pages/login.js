import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import ErrorCard from '../components/error'


export default function LoginScreen({ navigation }) {
    // const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null); 
    // const [token, onChangeToken] = React.useState(null);
    const [err, seterr] = React.useState('');

    async function onPressFunction(){
      if (isNaN(number)) {
        seterr("Please enter numbers only")
        console.log(err)
      } else if (number.toString().length != 10){
        seterr("Please enter a valid 10 digit phone number")
        console.log(err)
      } else {
        const baseurl = 'http://localhost:3000' + '/auth/getcode'
        await axios({
          method: 'get',
          url: baseurl + '?phone_number=' + number,
          responseType: 'json'
        })
        .then(function (response) {
          console.log(response.data);
          // onChangeToken(response.data.token);
          console.log("bruh")
          // console.log(token)
          console.log(response.data.token)
          if (response.data.token != null) {
            navigation.navigate('Verify', {
              phone_number: number,
              token: response.data.token,
            })
          }
        })

        .catch(function (error) {
          console.log(error);

        });
      }     
      
    }


    return (
      <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.viewtemplate}>
        <View style={styles.centerview}>

          {err != ''
          ? <ErrorCard title={err}/>
          : null}

          <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>sign up / log in</Text>
        </View>

        <View>
        <Text style={styles.titleinput}>Phone Number</Text>
        </View>
        
        <View style={styles.centerview}>
          <TextInput
            style={styles.datainput}
            onChangeText={onChangeNumber}
            autoFocus={true}
            value={number}
            placeholder="Enter your Phone Number"
            placeholderTextColor="#000" 
          />
          {/* <Pressable style={styles.button} onPress={() => navigation.navigate('Verify')}> */}
          <Pressable style={styles.button} onPress={onPressFunction}>
            <Text style={styles.text}>Continue</Text>
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



