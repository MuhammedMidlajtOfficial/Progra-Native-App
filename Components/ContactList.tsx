import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: "Elon Musk",
      status: "CEO of Tesla Motors",
      imageUrl: 'https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg'
    },
    {
      uid: 2,
      name: "Bill Gates",
      status: "Former CEO of Microsoft",
      imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ5q_alP8jzpTv_T3zupEpRfFIbo2qQkttFuW3AzE00-8zljPbVNRU44S_SqBOitpM143Owjd6myNdrtCo'
    },
    {
      uid: 3,
      name: "Steve Jobs",
      status: "Former CEO of Apple",
      imageUrl: 'https://i.insider.com/656e93d10ec98e92f74c0510?width=700'
    },
    {
      uid: 4,
      name: "Mark Zuckerberg",
      status: "CEO of Facebook",
      imageUrl: 'https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg'
    },
    {
      uid: 5,
      name: "Jane Fraser",
      status: "CEO of Citigroup",
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS110jST1UM6PFf885pLXXbvkMNiSudqwV5H1jfxI-AoEYz07lu3VAmSmf7KFkSZtUG0RWFOu_2JUI4tG-6q5anxtD2Z0Kj8abVYwmthA'
    },
  ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid,name,status,imageUrl})=>(
          <View key={uid} style={styles.userCard}>
            <Image 
              source={{uri:imageUrl}}
              style={styles.userImage}
            /> 
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:16,
    marginBottom:4,
  },
  headingText: {
      fontSize : 24,
      fontWeight : 'bold',
      paddingHorizontal : 8,
  },
  userCard: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:4,
    borderWidth:1,
    borderTopLeftRadius:35,
    borderBottomRightRadius:35,
    borderColor:"#9d9e9d",
  },
  userImage: {
    width:60,
    height:60,
    borderTopLeftRadius:30,
    marginRight:14,
    borderWidth:0.5,
    borderColor:"#9d9e9d"
  },
  userName: {
    fontSize:16,
    fontWeight:'bold',
    color:"#000"
  },
  userStatus: {
    fontSize:12
  },
})