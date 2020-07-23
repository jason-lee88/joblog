import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Date extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.day}>{this.props.date}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    day: {
        fontSize: 14,
    }
})

export default Date