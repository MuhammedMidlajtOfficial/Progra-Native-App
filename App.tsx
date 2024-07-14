import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FlatCards from "./Components/FlatCards";
import ElevatedCards from "./Components/ElevatedCards";
import FancyCard from "./Components/FancyCard";
import ActionCard from "./Components/ActionCard";

function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;