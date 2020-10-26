import React, {PureComponent} from 'react';
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
  Alert,
} from 'react-native';
import styles from '../styles';

// assets
import chat from '../assets/chat.png';
import search from '../assets/search.png';
import paimon from '../assets/paimon.jpg';
import pencil from '../assets/pencil.png';
import closeModal from '../assets/cancel-button.png';

export class Home2 extends PureComponent {
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
    AsyncStorage.getItem('dataUser')
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
    console.log('save data home: ' + this.state.data);
    AsyncStorage.setItem(
      'dataUser',
      JSON.stringify(this.state.data),
    ).catch((err) => console.log(err));
  }

  setModal() {
    this.setState({modal: false});
    this.setState({modalChat: false});
  }

  addData() {
    if (this.state.name == 'Radiant') {
      const {name, data} = this.state;
      let newData = [name, ...data];
      this.setState({data: [...newData]}, function () {
        this.saveData();
        this.setModal();
        console.log('data setelah add: ' + this.state.data);
      });
    } else {
      alert('Kamu hanya bisa mengobrol dengan Radiant.');
    }
    this.setState({name: ''});
  }

  deleteData(index) {
    let filtered = this.state.data.filter((v, i) => i != index);
    this.setState({data: filtered}, function () {
      this.saveData();
    });
    // this.setModal();
    // alert(index);
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

  alertDelete(index) {
    Alert.alert(
      'Opsi Kontak',
      'Hapus pesan?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'Hapus', onPress: () => this.deleteData(index)},
      ],
      {cancelable: false},
    );
  }

  newDate() {
    var tanggal = new Date();
    return tanggal.getMinutes();
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Image source={chat} style={styles.headerImage} />
          <Text style={styles.headerText}> Chat </Text>
          <TouchableOpacity onPress={() => this.newDate()}>
            <Image source={search} style={styles.headerSearch} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.home}>
            {this.state.data.map((value, index) => {
              return (
                <View style={styles.chat} key={index}>
                  {/* CAN'T DELETE CHAT PROPERLY WITH MODAL YET. */}
                  {/* <Modal
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
                      <Text>{value}</Text>
                      <TouchableOpacity
                        style={styles.buttonAdd}
                        onLongPress={() => console.log(index)}
                        onPress={() => this.deleteData(index)}>
                        <Text style={styles.buttonText}>Hapus</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal> */}
                  <TouchableOpacity>
                    <Image source={paimon} style={styles.chatImage} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.textChat}
                    onPress={() =>
                      this.props.navigation.navigate('Chat', {
                        value: value,
                        sender: this.props.route.params.user,
                      })
                    }
                    onLongPress={() => {
                      this.alertDelete(index);
                      console.log(index);
                    }}>
                    <View style={styles.contactView}>
                      <Text style={styles.contactName}>{value}</Text>
                      <Text style={styles.contactLastSeen}>
                        {this.newDate()}
                      </Text>
                    </View>
                    <Text>pesan terakhir</Text>
                  </TouchableOpacity>
                  {/* MODAL CONTACT OPTION */}

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

export default Home2;
