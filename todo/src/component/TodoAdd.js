import { Button, TextField } from '@material-ui/core';
import React from 'react';
export default function TodoAdd(props) {
    const [submit, setSubmit] = React.useState(false);
    const [text, setText] = React.useState('');

    const onSubmit = () => {
        props.onSubmit(text);
        setSubmit(false)
        window.document.getElementById('addfield').value = null
        setText('')

    }
    const onEnter = (key) => {
        if (key.target.value !== null) {
            if (!submit) { setSubmit(true) }

        }
        if (key.keyCode === 13) {
            onSubmit()
        } else if ( key.keyCode === 8) {
            setText(key.target.value.slice(0,-1))
        } else if (key.key.length === 1) {
            setText(key.target.value + key.key)
        } else {
            setText(key.target.value)
        }
    }
    return (
        <div style={{ display: "flex", alignItems: "flex-end" }}>
            <TextField id="addfield" label="Add new todo item..." fullWidth={true} onKeyDown={onEnter} />
            <Button variant="contained" color="primary" disabled={!submit} onClick={onSubmit}>Submit</Button>
        </div>
    )

}