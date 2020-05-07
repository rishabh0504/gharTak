import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { Component } from "react";
import { MenuButton, HeaderSearch, RightMenuButton } from "../components/header/header";
import { Avatar } from "react-native-elements";
import { Image, Tile, Title, Overlay, Subtitle, Caption, Card, Row, GridRow, ImageBackground, TextInput, Text, Divider, TouchableOpacity } from '@shoutem/ui'


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      categories: [

        {
          "name": "Dairy",
          "url": "https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323073/dairy-products.jpg"
        },
        {
          "name": "Fruits",
          "url": "https://images.all-free-download.com/images/graphiclarge/fruits_sweet_fruit_213988.jpg"
        },
        {
          "name": "Gifts",
          "url": "https://images.all-free-download.com/images/graphiclarge/valentine39s_day_gift_box_hd_picture_2_166525.jpg"
        },
        {
          "name": "Cake",
          "url": "http://www.baltana.com/files/wallpapers-18/Chocolate-Cake-Background-Wallpaper-46543.jpg"
        },
        {
          "name": "Ice cream",
          "url": "https://images.all-free-download.com/images/graphiclarge/ice_cream_with_berries_513262.jpg"
        },
        {
          "name": "Soft Drink",
          "url": "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2018/03/14/shortfall-in-soft-drinks-levy-attributed-to-aggressive-reformulation/7969804-1-eng-GB/Shortfall-in-soft-drinks-levy-attributed-to-aggressive-reformulation_wrbm_large.jpg"
        },
        {
          "name": "Spices",
          "url": "https://images.all-free-download.com/images/graphiclarge/spices_hd_figure_2_167357.jpg"
        },
        {
          "name": "Vegetables",
          "url": "http://www.baltana.com/files/wallpapers-1/Vegetable-Desktop-Wallpaper-03538.jpg"
        },
        {
          "name": "Grocery",
          "url": "https://images.all-free-download.com/images/graphiclarge/whole_grains_01_hd_picture_166514.jpg"
        },
        {
          "name": "Bread",
          "image": { "url": "http://www.baltana.com/files/wallpapers-5/Bread-HQ-Desktop-Wallpaper-16626.jpg" },
        }
      ],
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <HeaderSearch />,
      headerBackTitle: "Profile",
      headerLayoutPreset: "center",
      headerStyle: { backgroundColor: 'transparent', height: windowHeight / 10 },
      headerRight: <RightMenuButton onPress={() => navigation.navigate('Cart')} />,

    };
  };

  searchTextHandler = (searchText) => {
    this.setState({ searchText: searchText })
  }

  render() {

    const { categories } = this.state;

    const cellViews = categories.map((category, id) => {
      return (
        <TouchableOpacity key={id} >
          <View style={{ marginLeft: 5, marginRight: 5, justifyContent: 'center', flex: 1 }}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                  category.url,
              }}
            />
            <Caption style={{ textAlign: 'center' }} >{category.name} </Caption>
          </View>
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

          <Row style={{ backgroundColor: 'transparent' }}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }} >
              <GridRow style={{ marginLeft: 5, marginRight: 5 }} columns={20}>
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
