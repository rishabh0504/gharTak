import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from '../screens/CartScreen';
import ChatScreen from '../screens/ChatScreen';
import OrderScreen from '../screens/OrderScreen';

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Cart: { screen: CartScreen },
  Order: { screen: OrderScreen },
  Chat: { screen: ChatScreen }
});

export const SettingsNavigator = createStackNavigator({
  Settings: { screen: SettingsScreen }
});

export const ProfileNavigator = createStackNavigator({
  Profile: { screen: ProfileScreen }
});

export const SearchNavigator = createStackNavigator({
  Search: { screen: SearchScreen }
});
