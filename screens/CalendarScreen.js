import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WeekdayLabels from '../components/WeekdayLabels'
import Calendar from '../components/calendar/Calendar'

const CalendarScreen = props => {
    return (
        <View style={styles.container}>
            <WeekdayLabels/>
            <Calendar/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CalendarScreen