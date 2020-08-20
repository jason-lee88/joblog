import React, { useState } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'

const DarkMode = props => {
    const [enabled, setEnabled] = useState(false)

    _onValueChange = () => {
        setEnabled(!enabled)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dark Mode</Text>
            <Switch
                onValueChange={_onValueChange}
                value={enabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 24
    }
})

export default DarkMode