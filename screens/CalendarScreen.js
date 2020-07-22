import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import WeekdayLabels from '../components/WeekdayLabels'

const CalendarScreen = props => {
    return (
        <View style={styles.container}>
            <WeekdayLabels/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CalendarScreen