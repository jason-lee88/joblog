import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import CalendarScreen from './screens/CalendarScreen'
import SettingsScreen from "./screens/SettingsScreen"

export default function App() {
  const [screen, setScreen] = useState("Calendar")

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Header title="JobLog"/>
      {screen == "Calendar" && <CalendarScreen/>}
      {screen == "Settings" && <SettingsScreen/>}
      <NavigationBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});