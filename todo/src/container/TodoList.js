import { List, makeStyles } from '@material-ui/core';
import React from 'react';
import TodoAdd from '../component/TodoAdd';
import TodoItem from '../component/TodoItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 'sm',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TodoList() {
    const classes = useStyles();
    const [todolist, setTodoList] = React.useState([])

    const handleCheck = (value) => {
        const newChecked = [...todolist];
        const item = newChecked.find(item => item.id === value)
        item.checked = !item.checked;
        setTodoList(newChecked);
    };

    const handleRemove = (value) => {
        const newTodoList = todolist.filter(item => item.id !== value)
        setTodoList(newTodoList);
    }

    const handleSubmit = (text) => {
        const newTodoList = [...todolist];
        const newId = todolist.length === 0 ? 0 : Math.max(...newTodoList.flatMap(item => item.id)) + 1;
        newTodoList.push({
            id: newId,
            title: text,
            checked: false
        })

        setTodoList(newTodoList)
    }

    return (
            <List className={classes.root}>
                <TodoAdd onSubmit={handleSubmit} />
                {todolist.map((todo) => {

                    return (
                        <TodoItem id={todo.id} checked={todo.checked} title={todo.title} onCheck={handleCheck} onRemove={handleRemove} />
                    );
                })}
            </List>
    );
}

