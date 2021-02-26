import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';
//import MyBartersScreen from "../screens/MyBartersScreen"

// export default class AppDrawerNavigator extends React.Component {
//   render() {
//    <AppContainer/>
//   }
// }
//MyBarters:{screen:MyBartersScreen},
export const drawer = createDrawerNavigator({
      Home:{ screen:AppTabNavigator},
      
      Settings: {screen:SettingsScreen}
      },
      {
        contentComponent: CustomSideBarMenu,
      },
      {
        initialRouteName: 'Home',
      }
    );