import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from '../screens/Home';
import Navigator from '../router/Navigator';

export class Splash extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({status: false});
    }, 1000);
  }

  render() {
    if (this.state.status) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return <Navigator />;
    }
  }
}

export default Splash;
