import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import{ AppTabNavigator} from './components/AppTabNavigator';
import {AppDrawerNavigator }from './components/AppDrawerNavigator';
//import AppStackNavigator from './components/AppStackNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
    
  }
}

const Switchscreen = createSwitchNavigator({
  Welcome: { screen: SignupLoginScreen },
  Drawer: {screen:AppDrawerNavigator},
  BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(Switchscreen);
