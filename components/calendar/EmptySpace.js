import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class EmptySpace extends React.Component {
    render(){
        return (
            <View style={styles.container}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 70,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

export default EmptySpace