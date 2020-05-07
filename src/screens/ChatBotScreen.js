import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { Component } from "react";
import { MenuButton, HeaderSearch } from "../components/header/header";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default class ChatBotScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <HeaderSearch />,
            headerBackTitle: "Profile",
            headerLayoutPreset: "center",
            headerStyle: { backgroundColor: 'transparent', height: windowHeight / 10 },

        };
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello! Welcome to my ChatBotScreen </Text>
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
