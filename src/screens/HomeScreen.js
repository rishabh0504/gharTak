import { View, StyleSheet, Dimensions } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";

import { Image, Tile, Title, Overlay, Subtitle, Caption, ImageBackground, TextInput, Text, Divider } from '@shoutem/ui'


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Profile",
      headerLayoutPreset: "center",
      headerStyle: { backgroundColor: 'transparent', height: windowHeight / 10 },

    };
  };

  searchTextHandler = (searchText) => {
    this.setState({ searchText: searchText })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          styleName="large-banner"
          source={require('../assets/bg.jpg')}
        >
          <Tile>
            <TextInput
              defaultValue={'Search...'}
              style={styles.searchBox}
              value={this.state.searchText}
              onChangeText={this.searchTextHandler}
            />

          </Tile>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -windowHeight / 10
  },
  yourStyle: {
    marginTop: 0
  },
  searchBox: {
    borderWidth: 1,
    padding: 2,
    paddingLeft: 10,
    width: windowWidth * 50 / 100,
    height: 40,
    backgroundColor: 'transparent',
    borderColor: '#d3d3d3',
    borderRadius: 5,
    color: 'white'
  },
  carousel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  }
});
