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
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';
import db from '../config';

export default class CustomSideBarMenu extends React.Component {
  render() {
    return (
      <View>
        <DrawerItems {...this.props} />
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignUpLogin');
              firebase.auth().signOut();
            }}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
