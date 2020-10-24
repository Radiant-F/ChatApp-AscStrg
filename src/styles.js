import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
  },
  modal: {
    backgroundColor: 'white',
    width: '90%',
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalCloseImg: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    tintColor: '#0091bd',
  },
  textModalHeader: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0091bd',
  },
  buttonAdd: {
    backgroundColor: '#0091bd',
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  inputModal: {
    backgroundColor: '#00000024',
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  header: {
    backgroundColor: '#0091bd',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    flex: 1,
  },
  headerImage: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    marginRight: 15,
  },
  headerSearch: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  home: {
    padding: 10,
    flex: 1,
    // backgroundColor: 'aqua', // remove after development
  },
  balon: {
    backgroundColor: '#0091bd',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },
  pencil: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  chat: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'center',
    // backgroundColor: '#fff', // remove after development
    borderBottomWidth: 1,
    borderBottomColor: '#0000001a',
    marginBottom: 5,
  },
  chatImage: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    marginRight: 10,
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
  contactLastSeen: {
    color: 'grey',
  },
  textChat: {
    flex: 1,
  },

  // ============ CHAT ============
  headerTextMain: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerImageChat: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
  },
  headerTextChat: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  headerMore: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  headerStatus: {
    color: '#fff',
    left: 5,
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  kanan: {
    marginVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    height: 40,
    padding: 20,
    elevation: 5,
    borderRadius: 10,
  },
  kiri: {
    backgroundColor: 'aqua',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    height: 40,
    padding: 20,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 5,
  },

  footerView: {
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: 0,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // remove after development
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  footerImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  footerInput: {
    flex: 1,
  },

  // ============ LOGIN ============
  mainViews: {
    backgroundColor: '#000000a6',
    margin: 20,
    borderRadius: 10,
    width: 380,
    height: 300,
    justifyContent: 'center',
  },
  mainText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    marginBottom: 10,
    textShadowColor: '#db66ff',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  subView: {
    margin: 10,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#e48aff94',
    borderRadius: 5,
    height: 50,
    width: 300,
    marginVertical: 5,
  },
  textInputImage: {
    width: 25.5,
    height: 19,
    marginRight: 7,
    marginLeft: 6,
    tintColor: '#fff',
  },
  textInputImage2: {
    width: 25,
    height: 25,
    marginRight: 8,
    marginLeft: 6,
    tintColor: '#fff',
  },
  textInput: {
    width: '80%',
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewLogin: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#d447ff',
    borderRadius: 5,
    height: 50,
    width: 300,
    marginTop: 15,
  },
  textLogin: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0.5,
      height: 0.5,
    },
  },
  textSwitchView: {
    justifyContent: 'space-between',
  },
  textSubView: {
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
    marginTop: 10,
  },

  // ============ DRAWER ============
  viewMain: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#0091bd',
    justifyContent: 'flex-end',
    padding: 15,
  },
  pp: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginVertical: 20,
  },
  drawerText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  drawerNumber: {
    fontSize: 10,
    color: '#c4c4c4',
  },
});
