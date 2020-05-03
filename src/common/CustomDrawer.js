import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { MenuButton, HeaderSearch } from "../components/header/header";

export default class CustomDrawer extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Hello! Welcome to my homepage</Text>
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
