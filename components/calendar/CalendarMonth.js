import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class CalendarMonth extends React.Component {
    getMonthData = (date) => {
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

    render() {
        {console.log(this.props)}
        return(
            <View style={styles.container}>
                <Text style={styles.header}>{monthNames[this.props.monthData.month]} {this.props.monthData.year}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold'
    }
})

export default CalendarMonth