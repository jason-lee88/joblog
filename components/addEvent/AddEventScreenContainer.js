import React from 'react'
import { StyleSheet, View } from "react-native"

import AddEventWindow from './AddEventWindow'

const AddEventScreenContainer = props => {
    return (
        <View style={styles.container}>
            <AddEventWindow/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AddEventScreenContainer