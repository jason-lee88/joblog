import React from 'react';
import ReactDOM from 'react-dom';

class CalendarMonth extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View/>
        )
    }
}

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