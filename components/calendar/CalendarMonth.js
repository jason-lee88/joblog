import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Week from './Week';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class CalendarMonth extends React.PureComponent {
    daysInRows = []

    state = {
        daysInRows: []
    }

    getMonthData = (month, year) => {
        const firstWeekday = new Date(year, month, 1).getDay();
        const numDays = new Date(year, month + 1, 0).getDate();
        const returnData = {
            firstWeekday: firstWeekday,
            numDays: numDays
        };
        return returnData;
    }

    componentDidMount() {
        monthData = this.getMonthData(this.props.monthIdentity.month, this.props.monthIdentity.year)

        this.daysInRows = [new Array(0), new Array(0), new Array(0), new Array(0), new Array(0), new Array(0)]

        for (let i = 0; i < 42; i++) {
            if (i < monthData.firstWeekday || i + 1 > monthData.numDays + monthData.firstWeekday) {
                this.daysInRows[parseInt(i / 7)].push("EMPTY")
            } else {
                this.daysInRows[parseInt(i / 7)].push(i + 1 - monthData.firstWeekday)
            }
        }

        if (this.daysInRows[5][0] == "EMPTY") {
            this.daysInRows.pop()
        }

        this.setState({daysInRows: this.daysInRows})
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>{monthNames[this.props.monthIdentity.month]} {this.props.monthIdentity.year}</Text>
                {this.state.daysInRows.map((rowData, index) => (
                    <Week
                        rowData = {rowData}
                    /> 
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 400
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        marginLeft: 5,
        marginVertical: 10
    }
})

export default CalendarMonth