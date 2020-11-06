import React from 'react';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoList from './container/TodoList';


export default function App() {
  return (
    <CssBaseline>
      <Container maxWidth='sm' style={{backgroundColor: "white"}} >
        <Typography align='center' variant='h3'>The Big Todo List React App</Typography>
        <BrowserRouter>
          <Route path="/" component={TodoList} />
        </BrowserRouter>
    </Container>
    </CssBaseline>
  );
}

