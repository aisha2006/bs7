import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
  Alert,
  Modal,
} from 'react-native';

import * as firebase from 'firebase';
import db from '../config';
import { Header } from 'react-native-elements';

export default class ExchangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: firebase.auth().currentUser.email,
      itemName: '',
      itemDescription: '',
      exchangeId: '',
    };
  }
  addItem = (itemName, itemDescription) => {
    var email = this.state.email;
    db.collection('item_requests').add({
      username: this.state.email,
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
    });
    this.setState({
      itemName: '',
      itemDescription: '',
    });

    return Alert.alert('Item ready to exchange', '', [
      {
        text: 'OK',
        onPress: () => {
          this.props.navigation.navigate('HomeScreen');
        },
      },
    ]);
  };
  createUniqueId() {
    var Idindex = Math.random().toString(5);
    this.setState({ exchangeId: Idindex });
  }

  render() {
    return (
      <View>
        <Header centerComponent={'exchange screen'} />

        <View>
          <TextInput
            placeholder="item name"
            onChangeText={(text) => {
              this.setState({ itemName: text });
            }}
          />
          <TextInput
            placeholder="item description"
            onChangeText={(text) => {
              this.setState({ itemDescription: text });
            }}
          />

          <TouchableOpacity
            onPress={() => {
              this.addItem();
              this.createUniqueId();
            }}>
            <Text>Add Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
