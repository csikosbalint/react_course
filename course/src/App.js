import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import CoursePage from './containers/CoursePage'
import EnquirePage from './containers/EnquirePage'
import Menu from './containers/Menu'
function App() {
  return (
    <Container maxWidth='sm' spacing={4} >
      <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/courses"/>
      </Route>
      <Route path="/" component={Menu}/>
      <Route path="/courses" component={CoursePage}/>
      <Route path="/enquires" component={EnquirePage}/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
