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
  FlatList,
} from 'react-native';

import * as firebase from 'firebase';
import db from '../config';
import { Header, ListItem } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      itemNameInfo: '',
      itemDescriptionInfo: '',
      userId: ''
    };
  }


  renderItem = (item, i) => {
    return (
      <ListItem
        key={i}
        title={this.state.itemNameInfo}
        subtitle={this.state.itemDescriptionInfo}
        titleStyle={{color:"black",fontWeight:"bold"}}
        rightElement={
          <TouchableOpacity>
            <Text>Exchange</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View>
        <Header centerComponent="Home Screen" />
        <View>
          <FlatList
            data={this.state.allRequests}
            renderItem={() => {this.renderItem()}}
            keyExtractor={(index) => {
              var i = index.toString();
              this.setState({userId:i})
            }}
          />
        </View>
      </View>
    );
  }
}
