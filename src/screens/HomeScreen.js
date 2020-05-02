import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";

import { Image, Tile, Title, Overlay, Subtitle, Caption, Card, Row, GridRow, ImageBackground, TextInput, Text, Divider, TouchableOpacity } from '@shoutem/ui'
import Carousel from "../common/carousel/Carousel";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      restaurants: [
        {
          "name": "Gaspar Brasserie",
          "address": "185 Sutter St, San Francisco, CA 94109",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
        },
        {
          "name": "Chalk Point Kitchen",
          "address": "527 Broome St, New York, NY 10013",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
        },
        {
          "name": "Kyoto Amber Upper East",
          "address": "225 Mulberry St, New York, NY 10012",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        }, {
          "name": "Gaspar Brasserie",
          "address": "185 Sutter St, San Francisco, CA 94109",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
        },
        {
          "name": "Chalk Point Kitchen",
          "address": "527 Broome St, New York, NY 10013",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
        },
        {
          "name": "Kyoto Amber Upper East",
          "address": "225 Mulberry St, New York, NY 10012",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        }
      ],
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

    const { restaurants } = this.state;

    const cellViews = restaurants.map((restaurant, id) => {
      return (
        <TouchableOpacity key={id} >
          <Card>
            <Image
              styleName="small-avatar"
              source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
            />
            <View styleName="content">
              <Caption>21 hours ago</Caption>
            </View>
          </Card>
        </TouchableOpacity>

      );
    });
    return (
      <View style={styles.container}>
        <ScrollView>
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
          <Row style={{ marginTop: -windowHeight * 10 / 100, backgroundColor: 'transparent' }}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
              <GridRow style={{ marginLeft: 5, marginRight: 5 }} columns={5}>
                {cellViews}
              </GridRow>
            </ScrollView>
          </Row>




        </ScrollView>

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
