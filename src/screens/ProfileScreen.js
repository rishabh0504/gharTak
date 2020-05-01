import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Profile",
      headerLayoutPreset: "center",
      headerStyle: { backgroundColor: 'transparent', height: windowHeight / 10 },

    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello! Welcome to my profile page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
