import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FlatCards from "./Components/FlatCards";
import ElevatedCards from "./Components/ElevatedCards";
import FancyCard from "./Components/FancyCard";
import ActionCard from "./Components/ActionCard";
import ContactList from "./Components/ContactList";

function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ContactList />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;