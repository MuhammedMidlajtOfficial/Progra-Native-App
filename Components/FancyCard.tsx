import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending News</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{uri:"https://media.licdn.com/dms/image/D4D12AQGVOytBvTf0Ww/article-cover_image-shrink_720_1280/0/1714023597338?e=2147483647&v=beta&t=IWhZJHK1BRFeUUXhGukjcT6tuBuzY9SYshADd182tfI"}}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>React 19</Text>
            <Text style={styles.cardLabel}>React 19 RC is available soon on NPM!</Text>
            <Text style={styles.cardDescription}>React 19 is the latest version of the popular JavaScript library for building user interfaces, featuring improved performance, new hooks, and better developer experience enhancements.{'\n'}Release date will update soon...</Text>
            <Text style={styles.cardFooter}>July 2024</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText  : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
    },
    card : {
       margin:8,
       borderRadius:5,
       width:370,
    //    height:360,
       height:'auto',
    },
    cardBody : {
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardElevated : {
        backgroundColor:'#303236',
        borderRadius:5,
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage : {
        height:180,
        // borderRadius:5,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardTitle : {
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:2,
    },
    cardLabel : {
        color:'#b3b1b1',
        fontSize:13,
        marginBottom:3,
    },
    cardDescription : {
        color:'#fff',
        fontSize:15,
        marginBottom:6,
    },
    cardFooter : {
        color:'#c4c4c4',
        fontWeight:'bold',
        fontSize:12,
        marginBottom:6,
    },
})