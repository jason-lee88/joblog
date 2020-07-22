import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import CalendarScreen from './screens/CalendarScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="JobLog"/>
      <CalendarScreen/>
      <NavigationBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});