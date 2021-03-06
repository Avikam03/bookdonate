import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, Pressable, SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import "../data/books.json"
import Card from '../components/card'

export default function Home2Screen({ navigation }) {
    return(
        <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.viewtemplate}>
            <View style={styles.centerview}>
            {/* <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>Explore Books</Text> */}
            {/* <ScrollView style={{width:'100%', marginHorizontal: '10%'}}> */}
            {/* <ScrollView style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>Explore Books</Text>
            <Card title="NCERT Class 10 Books" category="School" />
            <Card title="NCERT Class 12 Books" category="School" />
            <Card title="NCERT Class 11 Books" category="School" />
            <Card title="NCERT Class 9 Books" category="School" />
            <Card title="NCERT Class 9 Books" category="School" />
            <Card title="NCERT Class 9 Books" category="School" />
            <Card title="NCERT Class 9 Books" category="School" />
            <Card title="NCERT Class 9 Books" category="School" />
            <Card title="NCERT Class 9 Books" category="School" />
            </ScrollView> */}
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.centerscrollview}>
                    <Text style={{fontSize: 40, fontWeight: '700', color: 'white', marginTop: '20%',marginBottom: '10%'}}>Explore Books</Text>
                    <Card title="NCERT Class 10 Books" category="School" />
                    <Card title="NCERT Class 12 Books" category="School" />
                    <Card title="NCERT Class 11 Books" category="School" />
                    <Card title="NCERT Class 9 Books" category="School" />
                    {/* <Card title="NCERT Class 9 Books" category="School" />
                    <Card title="NCERT Class 9 Books" category="School" />
                    <Card title="NCERT Class 9 Books" category="School" />
                    <Card title="NCERT Class 9 Books" category="School" />
                    <Card title="NCERT Class 9 Books" category="School" /> */}
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

    // card: {
    //     backgroundColor: '#E6E6E6',
    //     width: '65%',
    //     height: '30%',
    //     marginVertical: '5%',
    //     paddingVertical: '10%',
    //     paddingHorizontal: '5%',
    // },

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
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        // backgroundColor: 'pink',
        // marginHorizontal: 20,
        // center items of view
        // alignItems: 'center',
        // justifyContent: 'center',
        maxWidth: '100%',
      },
      centerscrollview: {
        alignItems: 'center',
        justifyContent: 'center',
      }
});