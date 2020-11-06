import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import FoodDetailPage from './container/FoodDetailPage';
import FoodPage from './container/FoodPage';

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/food" />
        </Route>
        <Route exact path="/food" component={FoodPage}/>
        <Route path="/food/:fid" component={FoodDetailPage}/>
      </BrowserRouter>
  );
}

export default App;
