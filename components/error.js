import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function ErrorCard(props) {
    return(
        <View style={styles.card}>
            <Text style={{fontSize: 16, fontWeight: '700', color: 'white'}}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2d3436',
        width: '75%',
        height: '15%',
        marginVertical: '5%',
        // paddingVertical: '10%',
        // paddingHorizontal: '5%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
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