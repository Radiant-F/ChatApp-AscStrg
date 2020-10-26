import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import pp from '../assets/paimon.jpg';
import AsyncStorage from '@react-native-community/async-storage';

export class Drawer extends Component {
  logOut() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.viewMain}>
        <View style={styles.drawerHeader}>
          <Image source={pp} style={styles.pp} />
          <Text style={styles.drawerText}>User</Text>
          <Text style={styles.drawerNumber}>+62 851 57439660</Text>
        </View>
        <View style={{flex: 1, padding: 15}}>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => this.logOut()}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Drawer;
