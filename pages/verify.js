import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import ErrorCard from '../components/error'


export default function VerifyScreen({ navigation, route }) {
    const [number, onChangeNumber] = React.useState(null); 
    const phone_number = route.params.phone_number
    const token = route.params.token
    const [err, seterr] = React.useState('');

    async function onPressFunction(){

      if (isNaN(number)) {
        seterr("Please enter numbers only")
      } else if (number.toString().length != 4) {
        seterr("Please enter a valid 4 digit OTP")
      } else {
        const baseurl = 'http://localhost:3000' + '/auth/verify'

        await axios({
          method: 'get',
          url: baseurl + '?phone_number=' + phone_number + '&token=' + token + '&otp=' + number,
          responseType: 'json'
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.exists == 'true') {
            navigation.navigate('PreHome')
          } else {
            navigation.navigate('CompleteProfile', {
              phone_number: phone_number,
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
          {/* <Pressable style={styles.button} onPress={() => navigation.navigate('PreHome')}> */}
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

