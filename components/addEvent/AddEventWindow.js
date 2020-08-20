import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Close from "./Close"

const AddEventWindow = props => {
    return (
        <View style={styles.container}>
            <Close setVisibility={props.setVisibility}/>
            <Text style={styles.title}>New Event</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOffset: {height: -10},
        shadowOpacity: 0.4,
        shadowRadius: 10,
        width: '100%',
        height: '80%',
    }
})

export default AddEventWindow