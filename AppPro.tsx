import React from 'react'
import { View, Text, useColorScheme, StyleSheet } from 'react-native'

const AppPro = () => {
  const isDarkMode = useColorScheme() === 'light'
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText }>Hello AppPro</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    whiteText : {
        color : '#fff'
    },
    darkText : {
        color : '#000'
    },
})

export default AppPro