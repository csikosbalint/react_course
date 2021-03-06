import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import App from './App'
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
