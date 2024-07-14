import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Popular</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/800px-React_Logo_SVG.svg.png'}} 
            height={90}
            width={100}
          />
        </View>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'}} 
            height={88}
            width={100}
          />
        </View>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'}} 
            height={110}
            width={100}
          />
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
  container : {
    flex:1,
    flexDirection:'row',
    // backgroundColor:'#eab676',
    padding:8
  },
  card : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    borderRadius:5,
    margin:8,
  },
  cardImage:{
    height:90,
    width:100,
  }
})