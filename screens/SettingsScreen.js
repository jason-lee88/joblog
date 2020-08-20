import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DarkMode from '../components/DarkMode'

const SettingsScreen = props => {
    return (
        <View style={styles.container} display={props.currScreen == "Settings" ? 'flex': 'none'}>
            <DarkMode/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SettingsScreen