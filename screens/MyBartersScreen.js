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
  FlatList
} from 'react-native';
import {Icon,ListItem} from 'react-native-elements'
import * as firebase from 'firebase';
import db from '../config';
import { Header } from 'react-native-elements';
import { SnapshotViewIOS } from 'react-native';

export default class MyBartersScreen extends React.Component{
    constructor(){
        super();
        this.state={
            exchangeId:this.props.navigation.state.params("exchangeId"),
            email:this.auth().currentUser.email,
            allBarters:[]
        }
    }
    getAllBarters=()=>{
        db.collection("My_Barters").where("email","==",this.state.email)
        .onSnapshot((snapshot)=>{
          var allBarters = []
          snapshot.docs.map((doc)=>{
            var barters = doc.data()
            barters["doc_id"] = doc.id
            allBarters.push(barters)
          });
          this.setState({allBarters:allBarters})
        })
    }

    componentDidMount(){
      this.getAllBarters()
    }

    
   renderItem = ( {item, i} ) =>(
    <ListItem
      key={i}
      title={item.item_name}
      subtitle={"Requested By : " + item.requested_by}
      leftElement={<Icon name="gift" type="font-awesome" color ='#696969'/>}
      titleStyle={{ color: 'black', fontWeight: 'bold' }}
      rightElement={
          <TouchableOpacity>
            <Text>
              exchange button
            </Text>
          </TouchableOpacity>
        }
      bottomDivider
    />
  )



    render() {
      return (
        <View>
          <View>
            <Header centerComponent="My Barters" />
          </View>
          <View>
            <FlatList
           keyExtractor ={ (index) => index.toString()}
            data={this.state.allBarters}
            renderItem={this.getAllBarters()}
             />
          </View>
        </View>
      );
    }
  }