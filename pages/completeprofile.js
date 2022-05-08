import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import ErrorCard from '../components/error'



export default function CompleteProfileScreen({ navigation, route }) {
    // const [text, onChangeText] = React.useState("Useless Text");
    const [name, onChangeName] = React.useState(''); 
    const [grade, onChangeGrade] = React.useState('');
    const [err, seterr] = React.useState('');

    async function onPressFunction(){
        if (name == '' || grade == '') {
            console.log("at least one is empty")
            seterr("Please enter all fields")

        } else {
            const baseurl = 'http://localhost:3000' + '/auth/create'
            await axios({
                method: 'get',
                url: baseurl + '?name=' + name + '&grade=' + grade + '&phone_number=' + route.params.phone_number,
                responseType: 'json'
            })
            .then(function (response) {
                console.log(response.data);
                if (response.data.status == 'success'){
                    navigation.navigate('PreHome')
                } else {
                    console.log("katgaya")
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
            <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>complete your profile</Text>
        </View>

        <View>
            <Text style={styles.titleinput}>Name</Text>
        </View>
        
        <View style={styles.centerview}>
          <TextInput
            style={styles.datainput}
            onChangeText={onChangeName}
            autoFocus={true}
            value={name}
            placeholder="Enter your Phone Number"
            placeholderTextColor="#000" 
          />
        </View>

        <View>
            <Text style={styles.titleinput}>Grade</Text>
        </View>
        
        <View style={styles.centerview}>
          <TextInput
            style={styles.datainput}
            onChangeText={onChangeGrade}
            value={grade}
            placeholder="Enter your Phone Number"
            placeholderTextColor="#000" 
          />
        </View>

        {/* <Pressable style={styles.button} onPress={() => navigation.navigate('Verify')}> */}
        <Pressable style={styles.button} onPress={onPressFunction}>
            <Text style={styles.text}>Continue</Text>
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



