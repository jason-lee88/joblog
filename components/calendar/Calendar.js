import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import CalendarMonth from './CalendarMonth'

class Calendar extends React.Component {
    months = []
    monthsPerRender = 12

    state = {
        months: []
    }

    initializeMonths() {
        currMonth = new Date().getMonth()
        currYear = new Date().getFullYear()

        this.getMonths(currMonth, currYear, this.monthsPerRender)
    }

    getMonths(currMonth, currYear, numMonths) {
        for (let i = 0; i < numMonths; i++) {
            this.months.push({month: currMonth, year: currYear})
            if (currMonth == 11) {
                currMonth = 0
                currYear++
            } else {
                currMonth++
            }
        }
    }

    componentDidMount() {
        this.initializeMonths()

        this.setState({months: [... this.months]})
    }

    _renderItem = ({item, index}) => (
        <CalendarMonth
            monthIdentity = {item}
            index = {index}
        />
    )

    _itemSeparatorComponent = () => {
        return (
            <View style={styles.separator}/>
        )
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.months}
                renderItem={this._renderItem}
                ItemSeparatorComponent = {this._itemSeparatorComponent}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    separator: {
        height: 2,
        backgroundColor: '#f0f0f0'
    }
})

export default Calendar