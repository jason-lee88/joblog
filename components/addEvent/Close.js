import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'

const Close = props => {
    return (
        <TouchableWithoutFeedback onPress={() => props.setVisibility(false)}>
            <View style={styles.container}>
                <Text style={styles.x}>VVV</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    x: {
        fontSize: 20,
        color: '#b0b0b0',
        alignSelf: 'center'
    },
    container: {
        height: 24
    }
})

export default Close