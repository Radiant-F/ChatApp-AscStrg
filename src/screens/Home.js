import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles';

// assets
import chat from '../assets/chat.png';
import search from '../assets/search.png';
import derp from '../assets/derp.jpg';
import pencil from '../assets/pencil.png';
import closeModal from '../assets/cancel-button.png';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      modalChat: false,
      name: '',
      number: '',
      loading: false,
      data: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('data')
      .then((response) => {
        if (response != null) {
          const savedData = JSON.parse(response);
          this.setState({data: savedData});
          console.log(response);
        } else {
          console.log('Tidak ada data yang tersimpan di cache.');
        }
      })
      .catch((err) => console.log(err));
    console.log(this.props);
  }

  Clear() {
    AsyncStorage.clear();
    alert('Data sudah dibersihkan');
  }

  saveData() {
    console.log('save data home ' + this.state.data);
    AsyncStorage.setItem('data', JSON.stringify(this.state.data)).catch((err) =>
      console.log(err),
    );
  }

  setModal() {
    this.setState({modal: false});
    this.setState({modalChat: false});
  }

  addData() {
    if (this.state.name != '') {
      const {name, data} = this.state;
      let newData = [name, ...data];
      this.setState({data: newData}, function () {
        this.saveData();
        this.setModal();
        console.log('data setelah add = ' + this.state.data);
      });
    } else {
      alert('Isi nama dengan benar!');
    }
    this.setState({name: ''});
  }

  deleteData(index) {
    console.log(index);
    const {data} = this.state;
    let result = data.filter((value, id) => id !== index);
    console.log('result filter = ' + result);
    this.setState(
      {
        data: result,
      },
      function () {
        this.saveData();
      },
    );
    this.setModal();
  }

  // handleChoosePhoto = () => {
  //   const options = {
  //     noData: true,
  //   };
  //   ImagePicker.launchImageLibrary(options, (response) => {
  //     if (response.uri) {
  //       this.setState({photo: response});
  //     }
  //   });
  // };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Image source={chat} style={styles.headerImage} />
          <Text style={styles.headerText}> Chat </Text>
          <TouchableOpacity>
            <Image source={search} style={styles.headerSearch} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.home}>
            {this.state.data.map((value, index) => {
              return (
                <View style={styles.chat} key={index}>
                  <TouchableOpacity>
                    <Image source={derp} style={styles.chatImage} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.textChat}
                    onPress={() =>
                      this.props.navigation.navigate(
                        'Chat',
                        this.props.route.params,
                      )
                    }
                    onLongPress={() => {
                      this.setState({modalChat: true});
                      console.log(index);
                    }}>
                    <View style={styles.contactView}>
                      <Text style={styles.contactName}>{index}</Text>
                      <Text style={styles.contactLastSeen}>last seen</Text>
                    </View>
                    <Text>pesan terakhir</Text>
                  </TouchableOpacity>
                  {/* MODAL CONTACT OPTION */}
                  <Modal
                    visible={this.state.modalChat}
                    animationType="fade"
                    transparent={true}>
                    <View style={styles.modal}>
                      <View style={{flexDirection: 'row', marginBottom: 15}}>
                        <Text style={styles.textModalHeader}>Opsi Kontak</Text>
                        <TouchableOpacity onPress={() => this.setModal()}>
                          <Image
                            source={closeModal}
                            style={styles.modalCloseImg}
                          />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={styles.buttonAdd}
                        onPress={() => this.deleteData(index)}>
                        <Text style={styles.buttonText}>Hapus</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                  {/* END OF MODAL */}
                </View>
              );
            })}
          </View>
        </ScrollView>
        {/* MODAL TAMBAH KONTAK */}
        <Modal
          visible={this.state.modal}
          animationType="fade"
          transparent={true}>
          <View style={styles.modal}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textModalHeader}>Tambah Chat</Text>
              <TouchableOpacity onPress={() => this.setModal()}>
                <Image source={closeModal} style={styles.modalCloseImg} />
              </TouchableOpacity>
            </View>
            <View>{/* <Image source={require('../')}/> */}</View>

            <TextInput
              style={styles.inputModal}
              placeholder="Masukan nama"
              onChangeText={(nama) => this.setState({name: nama})}
            />
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => this.addData()}>
              <Text style={styles.buttonText}>Kirim Pesan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        {/* END OF MODAL  */}
        <TouchableOpacity
          style={styles.balon}
          onPress={() => this.setState({modal: true})}>
          <Image source={pencil} style={styles.pencil} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
