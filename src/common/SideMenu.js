import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import { Image, Text, Row, Icon, Divider, ImageBackground, Tile, Overlay, Title, Caption, Subtitle, TextInput } from '@shoutem/ui';
const windowWidth = Dimensions.get('window').width;

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    styleName="large-banner"
                    source={{ uri: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg' }}
                    style={{ width: windowWidth * 60 / 100 }}
                >
                    <Tile >
                        <Overlay style={{ width: windowWidth * 60 / 100 }}>
                            <Subtitle styleName="mid">{''}</Subtitle>
                            <Image
                                styleName="medium-avatar"
                                source={{ uri: 'https://scontent.fdxb1-1.fna.fbcdn.net/v/t1.0-9/p960x960/50877592_2588431321242991_5234053253796200448_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=NKKSmqks6toAX_mR4yy&_nc_ht=scontent.fdxb1-1.fna&_nc_tp=6&oh=be7bc3f17c3768b5760a3a64af95adf0&oe=5ED0EDC5' }}

                            />

                            <Subtitle styleName="mid">Rishabh Tiwari</Subtitle>
                        </Overlay>
                    </Tile>
                </ImageBackground>



                <ScrollView>

                    <TouchableOpacity onPress={this.navigateToScreen('Home')}>
                        <View style={styles.viewBox} >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar rounded-corners"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Subtitle styleName="mid">Home</Subtitle>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>
                    <Divider styleName="line" />

                    <TouchableOpacity onPress={this.navigateToScreen('Settings')}>
                        <View >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar rounded-corners"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Subtitle styleName="mid">Settings</Subtitle>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>
                    <Divider styleName="line" />
                    <TouchableOpacity onPress={this.navigateToScreen('Cart')}>
                        <View >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar rounded-corners"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Subtitle styleName="mid">Cart</Subtitle>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>
                    <Divider styleName="line" />
                    <TouchableOpacity onPress={this.navigateToScreen('Order')}>
                        <View >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar rounded-corners"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Subtitle styleName="mid">Order</Subtitle>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateToScreen('Chat')}>
                        <View >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar rounded-corners"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Subtitle styleName="mid">Chat US</Subtitle>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>

                    <Divider styleName="line" />

                </ScrollView>
                <Divider styleName="line" />
                <View >
                    <Row>
                        <Text numberOfLines={1}>GharTak Copyright@2020</Text>
                    </Row>
                </View>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;


