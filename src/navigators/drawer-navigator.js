import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator } from "./screen-stack-navigators";
import { HeaderSearch } from "../components/header/header";
import { Dimensions } from 'react-native';
import SideMenu from '../common/SideMenu'
const windowWidth = Dimensions.get('window').width;


const DrawerNavigator = createDrawerNavigator({
  /*To have a header on the drawer screens, 
        there must be a navigator that includes the screen you want to add to the drawer navigator.
        See 'screen-stack-navigator' file*/
  Home: BottomTabNavigator,
  Settings: SettingsNavigator
}, {
  transparentCard: true,
  contentComponent: SideMenu,

  drawerWidth: windowWidth * 60 / 100

});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
