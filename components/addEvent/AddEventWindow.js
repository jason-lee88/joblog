import React, { useState } from 'react'
import { StyleSheet, View, Text, SectionList, TextInput, KeyboardAvoidingView } from 'react-native'

import Close from "./Close"

const AddEventWindow = props => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")

    const data = [
        {
            data: ["Name", "Type"]
        },
        {
            data: ["Date", "Time"]
        },
        {
            data: ["Contact"]
        },
        {
            data: ["Notes"]
        }
    ]

    _renderItem = ({item, index, section}) => {
        return (
            <View>
                {index == 0 && item != "Name" && <View style={styles.separator}/>}
                {/* Manual separators because SectionSeparatorComponent renders at top and bottom of sections */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldText}>{item}</Text>
                    <TextInput style={styles.textInput} placeholder={"Enter information"} maxLength={32} multiline={false}/>
                </View>
            </View>
        )
    }

    _sectionSeparatorComponent = () => {
        return (
            <View style={styles.separator}/>
        )
    }

    return (
        <KeyboardAvoidingView style={styles.windowContainer} behavior={'padding'}>
            <Close setVisibility={props.setVisibility}/>
            <Text style={styles.title}>New Event</Text>
            <SectionList
                sections={data}
                renderItem={_renderItem}
                ref={component => {sectionList = component}}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        alignSelf: 'center'
    },
    fieldContainer: {
        margin: 20,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    fieldText: {
        fontSize: 20,
        marginRight: 10
    },
    textInput: {
        textAlign: 'right',
        textAlignVertical: 'top',
        paddingVertical: 10,
        paddingLeft: 10,
        minWidth: '30%'
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0'
    },
    windowContainer: {
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