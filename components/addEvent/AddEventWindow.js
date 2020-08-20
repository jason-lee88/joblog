import React, { useState } from 'react'
import { StyleSheet, View, Text, SectionList, TextInput } from 'react-native'

import Close from "./Close"

const AddEventWindow = props => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")

    const data = [
        {
            data: ["Name", "Type"]
        }
    ]

    _renderItem = ({item}) => (
        <Text>{item}</Text>
    )

    return (
        <View style={styles.container}>
            <Close setVisibility={props.setVisibility}/>
            <Text style={styles.title}>New Event</Text>
            <SectionList
                sections={data}
                renderItem={_renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOffset: {height: -10},
        shadowOpacity: 0.4,
        shadowRadius: 10,
        width: '100%',
        height: '80%',
    }
})

export default AddEventWindow