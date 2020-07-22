import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import AddEventButton from '../components/AddEventButton'

const Header = props => {
    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.leftContainer}/>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <View style={styles.rightContainer}><AddEventButton/></View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#3957a0',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    headerTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
});

export default Header;