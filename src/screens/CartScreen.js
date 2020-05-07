import { StyleSheet, Dimensions } from "react-native";
import React, { Component } from "react";
import { MenuButton, HeaderSearch } from "../components/header/header";
import { HeaderBackButton } from "react-navigation";
import { NavigationBar, Screen, ListView, Text, TouchableOpacity, View, Button, Overlay, Icon, ImageBackground, GridRow, Tile, Card, Title, Subtitle, Divider, Image, Caption, Row, ScrollView } from "@shoutem/ui";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default class CartScreen extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
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
                },
                {
                    "name": "Sushi Academy",
                    "address": "1900 Warner Ave. Unit A Santa Ana, CA",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
                },
                {
                    "name": "Sushibo",
                    "address": "35 Sipes Key, New York, NY 10012",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
                },
                {
                    "name": "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
                }
            ],
        }
    }
    renderRow(restaurant) {
        if (!restaurant) {
            return null;
        }

        return (
            <Row style={{ backgroundColor: 'transparent' }}>
                <Image
                    styleName="small rounded-corners"
                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                />
                <View styleName="vertical stretch space-between">
                    <Subtitle>Wilco Cover David Bowie</Subtitle>
                    <GridRow columns={2}>
                        <GridRow columns={1} style={{}}>
                            <Caption>Prize : 236$</Caption>
                        </GridRow>

                        <GridRow columns={3} style={{ marginTop: -10 }}>
                            <Button styleName="secondary">
                                <Text>+</Text>
                            </Button>
                            <Button>
                                <Text>2</Text>
                            </Button>
                            <Button styleName="secondary">
                                <Text>-</Text>
                            </Button>
                        </GridRow>

                    </GridRow>
                </View>
            </Row>
        );
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitle: <Title>Cart</Title>,

            headerBackTitle: "Profile",
            headerLayoutPreset: "center",
            headerStyle: { backgroundColor: 'transparent', height: windowHeight / 10 },
            headerTitleStyle: { color: 'green' },

        };
    };
    render() {
        const { restaurants } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListView
                        data={restaurants}
                        renderRow={this.renderRow}
                    />

                    <Row style={{ backgroundColor: 'transparent' }}>
                        <GridRow style={{ backgroundColor: 'transparent' }} columns={2}>
                            <View styleName='flexible'>
                                <Subtitle>Total : <Caption>2357.00 $</Caption></Subtitle>
                            </View>

                            <TouchableOpacity styleName='flexible'>
                                <Button styleName="confirmation secondary">
                                    <Text>CHECKOUT</Text>
                                </Button>
                            </TouchableOpacity>
                        </GridRow>
                    </Row>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
