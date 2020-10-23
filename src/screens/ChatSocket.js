import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import styles from '../styles';
import AsyncStorage from '@react-native-community/async-storage';
import Io from 'socket.io-client';

// ASSETS
import back from '../assets/back-arrow.png';
import more from '../assets/show-more-button-with-three-dots.png';
import derp from '../assets/derp.jpg';
import attach from '../assets/photo-library.png';
import bg from '../assets/bgChat.jpg';
import voice from '../assets/voice-message-microphone-button.png';
import sendButton from '../assets/send-button.png';

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }

  componentDidMount() {
    this.socket = Io('http://192.168.1.38:3000');
    this.socket.on('chat message', (msg) => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));
    return (
      <View style={{flex: 1}}>
        {/* <ImageBackground source={bg} style={styles.bg}> */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={back} style={styles.headerImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerTextMain}>
            <Image source={derp} style={styles.headerImageChat} />
            <View>
              <Text style={styles.headerTextChat}> Nama Kontak </Text>
              <Text style={styles.headerStatus}>Status</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={more} style={styles.headerMore} />
          </TouchableOpacity>
        </View>
        {chatMessages}
        <View style={styles.footerView}>
          <TouchableOpacity>
            <Image source={attach} style={styles.footerImg} />
          </TouchableOpacity>
          <TextInput
            placeholder="Pesan"
            style={styles.footerInput}
            value={this.state.chatMessage}
            onSubmitEditing={() => this.submitChatMessage()}
            onChangeText={(chatMessage) => {
              this.setState({chatMessage});
            }}
          />
          <TouchableOpacity onPress={() => this.submitChatMessage()}>
            <Image source={sendButton} style={styles.footerImg} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={voice} style={styles.footerImg} />
          </TouchableOpacity>
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

export default Chat;
