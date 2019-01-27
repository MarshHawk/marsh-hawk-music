import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers/combinedReducer';
import Header from './components/headerComponent';
import './App.css';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())(createStore)
let store = createStoreWithMiddleware(combinedReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        Hello!
      </Provider>
    );
  }
}

export default App;
