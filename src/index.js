import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./components/redux/rootReducer";
import spamWords from "./components/redux/middleware";
import sagaWatcher from "./components/redux/sagas";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk, spamWords, saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app, document.getElementById('root'));
