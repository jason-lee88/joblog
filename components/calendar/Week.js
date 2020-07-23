import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Date from './Date';
import EmptySpace from './EmptySpace';

class Week extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.rowData.map((dateData, index) => {
                    if (dateData == "EMPTY") {
                        return (
                            <EmptySpace/>
                        )
                    }
                    else {
                        return (
                            <Date date={dateData}/>
                        )
                    }
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default Week