import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Calendar = props => {
    return (
        <View/>
    )
}

const styles = StyleSheet.create({

})

function getMonthData(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstWeekday = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    const returnData = {
        firstWeekday: firstWeekday,
        numDays: numDays
    };
    return returnData;
}

export default Calendar