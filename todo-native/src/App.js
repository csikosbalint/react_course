import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from './container/TodoList';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      justifyContent:'flex-start'
    }
  });
function App() {
    return (
        <View style={styles.container}>
        <TodoList/>
        </View>
    )
}

export default App;
