import React, { Component } from 'react';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';
import ScreenList from './src/components/ScreenList';
import configureStore from './src/store';

const store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScreenList />
      </Provider>
    );
  }
}



