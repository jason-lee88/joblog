import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddEventButton = props => {
    return (
        <Text style={styles.label} onPress={() => props.setVisibility(true)}>+</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        color: '#ffffff',
        paddingHorizontal: 10,
        marginRight: 10,
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'flex-end'
    }
})

export default AddEventButton;