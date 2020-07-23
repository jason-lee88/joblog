import React from 'react'
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native'

const NavigationBar = props => {
    return (
        <SafeAreaView style={styles.bar}>
            <Text style={styles.label}>Calendar</Text>
            <Text style={styles.label}>Settings</Text>
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
        justifyContent: 'center',
        flexDirection: 'row'
    },
    label: {
        flex: 1,
        color: '#808080',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default NavigationBar