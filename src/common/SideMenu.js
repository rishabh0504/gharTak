import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Text, Row, Icon } from '@shoutem/ui';

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
                <ScrollView>
                    <TouchableOpacity onPress={this.navigateToScreen('Home')}>
                        <View style={styles.viewBox} >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Text >Home</Text>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateToScreen('Profile')}>
                        <View >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Text >Profile</Text>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateToScreen('Search')}>
                        <View >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Text >Search</Text>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateToScreen('Settings')}>
                        <View >
                            <Row styleName="small" >
                                <Image
                                    styleName="small-avatar"
                                    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
                                />
                                <Text >Settings</Text>
                                <Icon styleName="disclosure" name="right-arrow" />
                            </Row>
                        </View>
                    </TouchableOpacity>



                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>This is my fixed footer</Text>
                </View>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;


