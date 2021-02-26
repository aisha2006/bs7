import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import UserDetailsScreen from '../screens/UserDetailsScreen'; 
import HomeScreen from "../screens/HomeScreen";

export const AppStackNavigator = createStackNavigator(
  {
  BarterList:{
    screen:HomeScreen,
    navigationOptions:{headerShown:false},
  },
  
  UserDetails:{
     screen:UserDetailsScreen,
    navigationOptions:{headerShown:false}
    }, 
},
{
  initialRouteName:"BarterList"
}
)