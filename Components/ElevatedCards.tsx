import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Programming Languages</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ooLA59TQ107iyOYmkwUzVZJKRisuExlTGQ&s'}} 
            height={100}
            width={90}
          />
        </View>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png'}} 
            height={100}
            width={90}
          />
        </View>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://camo.githubusercontent.com/f74e065f47943d9a3ac69910c8015893660cf204f90562255fd530a8296278e5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f70726f6772616d6d696e672d6c616e6775616765732d6c6f676f732f7372632f6a6176617363726970742f6a6176617363726970742e706e67'}} 
            height={100}
            width={90}
          />
        </View>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://i.pinimg.com/736x/07/eb/59/07eb59b203c2287ff2f61ca2d677b83f.jpg'}} 
            height={100}
            width={100}
          />
        </View>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBix_p7OKCsnjpd3OIN-6C5U5aZOYZcehKA&s'}} 
            height={100}
            width={90}
          />
        </View>
        <View style={styles.card}>
          <Image 
            source={{uri:'https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png'}} 
            height={100}
            width={90}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:8,
    },
    headingText  : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
    },
    card : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:5,
        margin:5,
    },
    cardElevated : {
        backgroundColor:'#CAD5E2',
        elevation:4,
    },
})