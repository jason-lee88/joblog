import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Close = props => {
    return (
        <View styles={styles.container}>
            <Text styles={styles.x}>X</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    x: {
        fontSize: 36
    },
    container: {
        width: 14,
        height: 14,
    }
})

export default Close