import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
    return(
        <View style={styles.card}>
            <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>{props.title}</Text>
            <View style={{backgroundColor: '#ff7675', width:'30%', padding: 2, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{props.category}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#E6E6E6',
        width: '100%',
        height: '20%',
        marginVertical: '5%',
        paddingVertical: '10%',
        paddingHorizontal: '5%',
        borderRadius: 5,
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        textAlign:'center'
        
    },


});