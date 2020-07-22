import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const AddEventButton = props => {
    return (<Text style={styles.label}>+</Text>)
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