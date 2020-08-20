import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Close from "./Close"

const AddEventWindow = props => {
    return (
        <View styles={styles.container}>
            <Close/>
            <Text style={styles.title}>New Event</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36
    },
    container: {
        flex: 1
    }
})

export default AddEventWindow