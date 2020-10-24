import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from '../styles';
import AsyncStorage from '@react-native-community/async-storage';

// ASSETS
import back from '../assets/back-arrow.png';
import more from '../assets/show-more-button-with-three-dots.png';
import derp from '../assets/derp.jpg';
import attach from '../assets/photo-library.png';
import bg from '../assets/bgChat.jpg';
import voice from '../assets/voice-message-microphone-button.png';
import sendButton from '../assets/send-button.png';

export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      chatMessage: '',
      chatMessages: [],
      user: 'Radiant',
      admin: 'Fadil',
    };
  }

  sendData() {
    let newData = {
      text: this.state.chatMessage,
      sender: this.props.route.params.user,
    };
    let data = [newData, ...this.state.chatMessages];
    this.setState({chatMessages: [...data]}, function () {
      this.saveData();
      this.setState({chatMessage: ''});
    });
  }

  deleteData(index) {
    let filtered = this.state.chatMessages.filter((v, i) => i != index);
    this.setState({chatMessages: filtered}, function () {
      this.saveData();
    });
  }

  saveData() {
    AsyncStorage.setItem(
      'pesan',
      JSON.stringify(this.state.chatMessages),
    ).catch((err) => console.log(err));
    console.log(this.state.chatMessages);
  }

  componentDidMount() {
    AsyncStorage.getItem('pesan').then((response) => {
      if (response != null) {
        this.setState({chatMessages: JSON.parse(response)});
        console.log(response);
      } else {
        console.log('Tidak ada pesan yang tersimpan.');
      }
    });
    console.log(this.props.route.params);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={bg} style={styles.bg}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={back} style={styles.headerImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerTextMain}>
              <Image source={derp} style={styles.headerImageChat} />
              <View>
                <Text style={styles.headerTextChat}>
                  {this.props.route.params}
                </Text>
                <Text style={styles.headerStatus}>Status</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={more} style={styles.headerMore} />
            </TouchableOpacity>
          </View>
          <View style={styles.footerView}>
            <TouchableOpacity>
              <Image source={attach} style={styles.footerImg} />
            </TouchableOpacity>
            <TextInput
              value={this.state.chatMessage}
              placeholder="Pesan"
              style={styles.footerInput}
              onChangeText={(input) => this.setState({chatMessage: input})}
            />
            <TouchableOpacity onPress={() => this.sendData()}>
              <Image source={sendButton} style={styles.footerImg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={voice} style={styles.footerImg} />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{paddingBottom: 50}}
            style={{padding: 10, marginBottom: 50}}>
            {this.state.chatMessages.map((value, index) => {
              if (value.sender == this.props.route.params.user) {
                return (
                  <TouchableOpacity
                    onPress={() => this.deleteData(index)}
                    key={index}
                    style={styles.kanan}>
                    <Text onPress={() => this.deleteData(index)}>
                      {value.text}
                    </Text>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    onPress={() => this.deleteData(index)}
                    key={index}
                    style={styles.kiri}>
                    <Text>{value.text}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default Chat;
