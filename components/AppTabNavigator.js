import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import {AppStackNavigator} from "./AppStackNavigator";

export const AppTabNavigator = createBottomTabNavigator(
  {
 
  HomeScreen:{
    screen:AppStackNavigator,
    navigationOptions:{tabBarLabel : "home Screen"},
  },
  
   ExchangeScreen:{
     screen:ExchangeScreen,
    navigationOptions:{tabBarLabel : "Exchange items"}
    },
    
})

