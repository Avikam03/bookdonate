import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default function Home1Screen({ navigation }) {
    const [bookname, setbookname] = useState('');
    const [description, setdescription] = useState('');
    const [selectedValue, setSelectedValue] = useState('Select a book');

    return(
        <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.viewtemplate}>
            <View style={styles.centerview}>
            <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>Create a new listing</Text>
            <TextInput
                style={styles.datainput}
                onChangeText={setbookname}
                // autoFocus={true}
                value={bookname}
                placeholder="Enter Book Name"
                placeholderTextColor="#000" 
            />
            <TextInput
                style={styles.datainput}
                onChangeText={setdescription}
                // autoFocus={true}
                value={description}
                placeholder="Enter Description"
                placeholderTextColor="#000" 
            />
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                itemStyle={{color: 'white'}}
            >
                <Picker.Item label="NCERT" value="NCERT" />
                <Picker.Item label="Action and Adventure" value="Action and Adventure" />
                <Picker.Item label="Nonfiction" value="Nonfictionjs" />
                <Picker.Item label="Fiction" value="Fiction" />
                <Picker.Item label="Picture book" value="Picture book" />
                <Picker.Item label="Comic" value="Comic" />
                <Picker.Item label="Biography" value="Biography" />
                <Picker.Item label="Children" value="Children" />
            </Picker>
            </View>    
        </SafeAreaView>
      </>
    )
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
});