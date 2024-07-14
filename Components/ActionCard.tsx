import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(siteLink:string){
    Linking.openURL(siteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Context API vs Redux
            </Text>
        </View>
        <Image 
            source={{ uri : 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*j2qirhY6najZyU7r0TywfA.png' }} 
            style={styles.cardImage}
        />
        <View>
            <Text style={styles.bodyContainer}>
                Next.js, a powerful React framework, offers developers the tools to create robust web applications with ease. However, as applications grow in complexity, managing state becomes crucial. Two popular state management solutions are Redux and the Context API.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=> openWebsite('https://www.linkedin.com/posts/rameezibrahimofficial_state-management-in-nextjs-redux-vs-context-activity-7203863760359354369-BIFZ?utm_source=share&utm_medium=member_android') }>
                <Text style={styles.socialLinks}>Read More {'->'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> openWebsite('https://www.instagram.com/mi.dlaj__?igsh=MW5xMHRrMmU0bWo5MQ==') }>
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
    },
    card : {
       margin:8,
       borderRadius:6,
       width:370,
       height:'auto',
    },
    cardElevated : {
        backgroundColor:'#4900a3',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    headingContainer : {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText : {
        color:'#FFF',
        fontWeight:'bold',
    },
    cardImage : {
        height:190,
       
    },
    bodyContainer : {
        padding:10,
        color:'#fff'
    },
    footerContainer : {
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks : {
        color:'#000',
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'#fff',
        padding:9,
        borderRadius:5,
        marginBottom:5,
        elevation:3,
    },
})