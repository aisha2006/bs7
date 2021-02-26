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

import firebase from 'firebase';
import db from '../config';
import { Header } from 'react-native-elements';

export default class UserDetailsScreen extends React.Component{
  constructor(){
    super();
    this.state={
      exchangeId: this.props.navigation.getParams("exchangeId"),
      email:firebase.auth().currentUser.email,
      userId: firebase.auth().currentUser.email,
      userContact:"",
      userAddress:'',
      userName:'',
      itemName:  this.props.navigation.getParams("itemNameInfo"),
      itemDescription:  this.props.navigation.getParams("itemDescriptionInfo"),
      requestStatus:''
    }
  }

   getUserDetails(){
       db.collection("users").where("email","==",this.state.email).get()
       .then((snapshot)=>{snapshot.forEach((doc)=>{
           this.setState({
               userName:doc.data().first_name,
               userContact:doc.data().phoneNo,
               userAddress:doc.data().address
           })
       })});
   }

    addBarters=()=>{
        db.collection("My_Barters").add({
            item_name: this.state.item_name,
            item_Description: this.state.itemDescription,
            userId: this.state.userId,
            userName:this.state.userName,
            userContact:this.state.userContact,
            userAddress:this.state.userAddress,
            requestStatus:'exchanger interested'
        })
    }

  render(){
    return(
      <View>
      </View>
    )
  }
}