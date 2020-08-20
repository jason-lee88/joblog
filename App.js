import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import CalendarScreen from './screens/CalendarScreen'
import SettingsScreen from "./screens/SettingsScreen"
import AddEventScreenContainer from "./components/addEvent/AddEventScreenContainer"

export default function App() {
  const [screen, setScreen] = useState("Calendar")
  const [AEVisible, setAEVisibility] = useState(false)

  getScreen = newScreen => {
    setScreen(newScreen)
  }

  getAEVisibility = newVisibility => {
    setAEVisibility(newVisibility)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Header title="JobLog" currScreen={screen} setVisibility={getAEVisibility}/>
      <CalendarScreen currScreen={screen}/>
      <SettingsScreen currScreen={screen}/>
      <AddEventScreenContainer AEVisibility={AEVisible} setVisibility={getAEVisibility}/>
      <NavigationBar setNewScreen={getScreen}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});