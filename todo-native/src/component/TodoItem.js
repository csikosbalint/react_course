import React from 'react';
import { View,Text, Button } from 'react-native';
export default function TodoItem(props) {
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch"
        }}>
        <Text>{props.title}</Text><Button onPress={ () => props.onRemove(props.id)} title="X"></Button>
        </View>
    )
}