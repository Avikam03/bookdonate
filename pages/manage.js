import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import "../data/books.json"
import Card from '../components/card'

export default function ManageScreen({ navigation }) {
    return(
        <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.viewtemplate}>
            <View style={styles.centerview}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.centerscrollview}>
                    <Text style={{fontSize: 40, fontWeight: '700', color: 'white', marginVertical: '10%'}}>Manage Listings</Text>
                    <Card title="NCERT Class 10 Books" category="School" />
                    <Card title="NCERT Class 12 Books" category="School" />
                    <Card title="NCERT Class 11 Books" category="School" />
                    <Card title="NCERT Class 9 Books" category="School" />
                </ScrollView>
            </SafeAreaView>
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
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
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
    },
    cardimageview: {
      marginHorizontal: '10%',
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
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {

      },
      centerscrollview: {
        alignItems: 'center',
        justifyContent: 'center',
      }
});