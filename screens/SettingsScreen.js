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


export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      isModalVisible: false,
      confirmPassword: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      age: null,
    };
  }

  getData = () => {
    db.collection('Users')
      .where('email', '==', this.state.emailId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            address: data.address,
            contact: data.contact,
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
          });
        });
      });
  };

  componentDidMount() {
    {
      this.getData();
    }
  }

  updateUserDetails = () => {
    var s = this.state;
    db.collection('Users').doc(this.state.emailId).update({
      address: s.address,
      contact: s.contact,
      first_name: s.firstName,
      last_name: s.lastName,
      age: s.age,
    });
  };
  render() {
    return (
      <View>
        <Header centerComponent="Settings" />
        <View>
          <ScrollView>
            <KeyboardAvoidingView>
              <Text>Registration form</Text>
              <TextInput
                placeholder={'first name'}
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({ firstName: text });
                }}
              />

              <TextInput
                placeholder={'last name'}
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({ lastName: text });
                }}
              />

              <TextInput
                placeholder={'Contact'}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({ contact: text });
                }}
              />

              <TextInput
                placeholder={'Address'}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({ address: text });
                }}
              />

              <View>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={this.updateUserDetails()}>
                  <Text style={styles.registerButtonText}>Save</Text>
                </TouchableOpacity>
              </View>

              <View></View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerButtonText: {
    alignSelf: 'center',
  },

  registerButton: {
    justifyContent: 'center',
  },
});
