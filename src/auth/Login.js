import React, {Component} from 'react';
import {
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles';
import bg from '../assets/bg.jpg';
import avatar from '../assets/email.png';
import lock from '../assets/lock.png';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      admin: 'Radiant',
      passAdmin: 1,
      user: 'Fadil',
      passUser: 2,
      name: '',
      pass: '',
    };
  }

  justLogin() {
    if (this.state.name && this.state.pass != '') {
      this.props.navigation.navigate('Home');
    } else {
      alert('Username dan password tidak boleh kosong!');
    }
  }

  login() {
    if (
      this.state.name == this.state.admin &&
      this.state.pass == this.state.passAdmin
    ) {
      alert('Selamat Datang, ' + this.state.admin + '.');
      this.props.navigation.navigate('Home');
    } else if (
      this.state.name == this.state.user &&
      this.state.pass == this.state.passUser
    ) {
      alert('Selamat Datang, ' + this.state.user + '.');
      this.props.navigation.navigate('Home');
    } else {
      alert('Masukan data dengan benar.');
    }
  }

  render() {
    return (
      <View>
        <ImageBackground source={bg} style={styles.backgroundImage}>
          <View style={styles.mainViews}>
            <Text style={styles.mainText}>Sign In</Text>
            <View style={styles.textInputView}>
              <Image source={avatar} style={styles.textInputImage} />
              <TextInput
                selectionColor="#ff00ff"
                placeholder={'Username'}
                placeholderTextColor="white"
                style={styles.textInput}
                onChangeText={(input) => this.setState({name: input})}
              />
            </View>
            <View style={styles.textInputView}>
              <Image source={lock} style={styles.textInputImage2} />
              <TextInput
                selectionColor="#ff00ff"
                placeholderTextColor="white"
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={(pass) => this.setState({pass: pass})}
              />
            </View>
            <TouchableOpacity onPress={() => this.justLogin()}>
              <View style={styles.textViewLogin}>
                <Text style={styles.textLogin}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;
