import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WeekdayLabels = props => {
    return (
        <View style={styles.bar}>
            <Text style={styles.label}>SUN</Text>
            <Text style={styles.label}>MON</Text>
            <Text style={styles.label}>TUE</Text>
            <Text style={styles.label}>WED</Text>
            <Text style={styles.label}>THU</Text>
            <Text style={styles.label}>FRI</Text>
            <Text style={styles.label}>SAT</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        height: 24,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    label: {
        flex: 1,
        color: '#808080',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default WeekdayLabels