import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'

const NavigationBar = props => {
    const [screen, setScreen] = useState("Calendar")

    onPress = newScreen => {
        setScreen(newScreen)
    }

    return (
        <SafeAreaView style={styles.bar}>
            <Text style={screen == "Calendar" ? styles.selectedLabel : styles.unselectedLabel} onPress={() => onPress("Calendar")}>Calendar</Text>
            <Text style={screen == "Settings" ? styles.selectedLabel : styles.unselectedLabel} onPress={() => onPress("Settings")}>Settings</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        height: 48,
        borderTopColor: '#d0d0d0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    unselectedLabel: {
        color: '#a0a0a0',
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    selectedLabel: {
        color: '#3957a0',
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default NavigationBar