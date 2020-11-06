import { View, Button, TextInput } from 'react-native';
import React from 'react';
export default function TodoAdd(props) {
    const [submit, setSubmit] = React.useState(false);
    const [text, setText] = React.useState('');

    const onSubmit = () => {
        props.onSubmit(text);
        setSubmit(false)
        setText('')

    }
    const onEnter = (key) => {
        if (key.nativeEvent !== null) {
            if (!submit) { setSubmit(true) }
        }
        if (key.nativeEvent.key === 'Enter') {
            onSubmit()
        } else if (key.nativeEvent.key == 'Backspace') {
            let t = text;
            setText(t.slice(0,-1))
        } else {
            let t = text;
            setText(t + key.nativeEvent.key)
        }
    }
    return (
        <View style={{ display: "flex", alignItems: "flex-end" }}>
            <TextInput placeholder="Add item..." placeholderColor="grey" id="addfield" onKeyPress={onEnter} />
            <Button title="Submit" disabled={!submit} onPress={onSubmit}>Submit</Button>
        </View>
    )

}