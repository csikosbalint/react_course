import React from 'react';
import { View, List, StyleSheet } from 'react-native';

import TodoAdd from '../component/TodoAdd';
import TodoItem from '../component/TodoItem';


function TodoList() {
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

    const styles = StyleSheet.create({
        listContainer: {
            width: "80%"
        },
        listItem: {
            width: "100%",
            padding: 10,
            marginTop: 2,
            color: '#191970',
            backgroundColor: '#eee',
            alignSelf: 'stretch',
        },
        container: {
            flex: 1,
            marginTop: 50,
            padding: 10,
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            justifyContent: 'flex-start'
        },
    });

    return (
        <View style={styles.container}>
            <TodoAdd onSubmit={handleSubmit} />
            <View style={styles.listContainer}>
                {todolist.map((todo) => {
                    return (
                        <TodoItem id={todo.id} checked={todo.checked} title={todo.title} onCheck={handleCheck} onRemove={handleRemove} />
                    );
                })}
            </View>
        </View>
    );
}

export default TodoList;
