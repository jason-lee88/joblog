import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacityBase } from 'react-native';

import CalendarMonth from './CalendarMonth'

class Calendar extends React.Component {
    months = []
    monthsPerRender = 12
    initialMonthsToRender = 24

    state = {
        months: [],
        month: 0,
        year: 0
    }

    initializeMonths() {
        let currMonth = new Date().getMonth()
        let currYear = new Date().getFullYear() - 1

        this.getMonths(currMonth, currYear, this.initialMonthsToRender)
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

        this.setState({month: currMonth, year: currYear}, () => {
            console.log(this.state.month + " " + this.state.year)
        })
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

    _keyExtractor = ({month, year, index}) => month + "-" + year

    _itemSeparatorComponent = () => {
        return (
            <View style={styles.separator}/>
        )
    }

    _onEndReached  = () => {
        let currMonth = this.state.month
        let currYear = this.state.year
    
        this.getMonths(currMonth, currYear, this.monthsPerRender)
        this.setState({months: [... this.months]})
    }

    _getItemLayout = (data, index) => { // All CalendarMonths are same height (no dynamic size calculation)
        let itemHeight = 402 // Change when either CalendarMonth container or separator height changes
        return ({length: itemHeight, offset: itemHeight*index, index: index})
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.months}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                ItemSeparatorComponent={this._itemSeparatorComponent}
                onEndReached={this._onEndReached}
                getItemLayout={this._getItemLayout}
                initialScrollIndex={12}
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