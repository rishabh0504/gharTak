import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import categoryItems from '../menus/categoryItems';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class Categories extends React.Component {


    render() {

        return (
            <View style={styles.container}>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
