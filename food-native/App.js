// In App.js in a new project

import * as React from 'react';
import { Provider } from 'react-redux';
import store from './src/store'
import Main from './src/container/Main'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;