import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
export default function TodoItem(props) {
    return (
        <ListItem key={`$props.id`} role={undefined} dense button onClick={() => props.onCheck(props.id)}>
        <ListItemIcon>
            <Checkbox
                edge="start"
                checked={props.checked}
                tabIndex={-1}
                disableRipple
            />
        </ListItemIcon>
        <ListItemText id={props.key} primary={props.title} />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="backspace" onClick={ () => props.onRemove(props.id)}>
                <BackspaceIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>        
    )
}