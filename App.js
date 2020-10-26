import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Splash from './src/auth/Splash';
import Login from './src/auth/Login';
import Chat from './src/screens/Chat';

export class App extends Component {
  render() {
    return <Splash />;
  }
}

export default App;
