/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const initialState = {
  isLoading: false,
  errMess: null,
  info: {},
};

const composeEnhancers = composeWithDevTools({
});
const reducer = (state = {
  isLoading: false,
  errMess: null,
  info: {},
}, action) => {
  switch (action.type) {
    case 'ADD_DEVICE_SUCCESS':
      return {
        ...state, isLoading: false, errMess: null, info: action.payload
      };
    case 'ADD_DEVICE_FAILED':
      return {
        ...state, isLoading: false, errMess: action.payload, info: {}
      };
    case 'ADD_DEVICE_LOADING':
      return {
        ...state, isLoading: true, errMess: null, info: {}
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
