import { View, StyleSheet, Dimensions, ScrollView, SafeAreaView } from "react-native";
import React, { Component } from "react";
import { MenuButton, HeaderSearch, RightMenuButton } from "../components/header/header";
import { Avatar } from "react-native-elements";
import { Image, Tile, Title, Overlay, Subtitle, Caption, Card, GridRow, ImageBackground, TextInput, Text, Divider, TouchableOpacity } from '@shoutem/ui'
import { Col, Row, Grid } from "react-native-easy-grid";
import Carousel from 'react-native-snap-carousel';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const individualWidth = (windowWidth - 20) / 5;

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
          "name": "Drink",
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
          "name": "Grocery",
          "url": "https://images.all-free-download.com/images/graphiclarge/whole_grains_01_hd_picture_166514.jpg"
        },
      ],
      recentlyOrderedCategories: [
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
          "name": "Drink",
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
          "name": "Grocery",
          "url": "https://images.all-free-download.com/images/graphiclarge/whole_grains_01_hd_picture_166514.jpg"
        },
      ],
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ]
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


  _renderItem({ item, index }) {
    return (
      <ImageBackground
        styleName="medium"
        source={{ uri: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg' }}
      >
        <Tile>
          <Overlay>
            <Title styleName="md-gutter-bottom">Chalk Point Kitchen</Title>
            <Caption>527 Broome St, New York, NY 10013</Caption>
          </Overlay>
        </Tile>
      </ImageBackground>
    )
  }

  render() {

    const { categories, recentlyOrderedCategories } = this.state;

    const cellViews = recentlyOrderedCategories.map((category, index) => {
      return (
        <TouchableOpacity key={index} >
          <View style={{ marginLeft: 5, marginRight: 5, justifyContent: 'center', flex: 1 }}>
            <Avatar
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



    let columns = [];
    const finalCategories = [];
    categories.map((category, index) => {
      if ((index) % 5 !== 0) {
        columns.push(
          <Col style={{ width: individualWidth }} >
            <TouchableOpacity key={index} >
              <View style={{ justifyContent: 'center', flex: 1, alignContent: 'center' }}>
                <Grid>
                  <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar
                      rounded
                      size="medium"
                      source={{
                        uri:
                          category.url,
                      }}
                    />
                  </Row>
                </Grid>
                <Caption style={{ textAlign: 'center' }} >{category.name} </Caption>
              </View>
            </TouchableOpacity>
          </Col>
        )
        if (index === categories.length - 1) {
          finalCategories.push(<Row style={{ marginBottom: 5 }}>{columns}</Row>)
        }
      } else {
        finalCategories.push(<Row style={{ marginBottom: 5 }}>{columns}</Row>)
        columns = [];
        columns.push(
          <Col style={{ width: individualWidth }}>
            <TouchableOpacity key={index} >
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Grid>
                  <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar
                      rounded
                      size="medium"
                      source={{
                        uri:
                          category.url,
                      }}
                    />
                  </Row>
                </Grid>
                <Caption style={{ textAlign: 'center' }} >{category.name} </Caption>
              </View>
            </TouchableOpacity>
          </Col>
        )
      }


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
          <Caption style={styles.subtitle}>Frequent Orders</Caption>
          <Row style={{ backgroundColor: 'transparent' }}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }} >
              <GridRow style={{ marginLeft: 5, marginRight: 5 }} columns={20}>
                {cellViews}
              </GridRow>
            </ScrollView>
          </Row>

          <Divider styleName="line" />
          <Caption style={styles.subtitle}>Categories</Caption>
          <View style={styles.flexContainer}>
            <Grid style={{ width: windowWidth - 10 }}>
              {finalCategories}
            </Grid>
          </View>

          <Divider styleName="line" />
          <Caption style={styles.subtitle}>Offers For You</Caption>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({ activeIndex: index })} />
          </View>
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
  flexContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    elevation: 2,
    paddingTop: 20,
    paddingBottom: 10
  },

  subtitle: {
    flex: 1,
    marginTop: 10,
    marginBottom: 2,
    marginLeft: 10,
    fontSize: 15
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


/*

<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }} >
              <GridRow style={{ marginLeft: 5, marginRight: 5 }} columns={20}>
                {cellViews}
              </GridRow>
            </ScrollView>

*/