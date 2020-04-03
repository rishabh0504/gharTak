import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import categoryItems from '../menus/categoryItems';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid';

export default class Categories extends React.Component {


    render() {
        console.log(categoryItems)
        const data = JSON.stringify(categoryItems)
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' }];
        return (
            <View style={styles.container}>

                <FlatGrid
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    // staticDimension={300}
                    // fixed
                    // spacing={20}
                    renderItem={({ item, index }) => (
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCode}>{item.code}</Text>
                        </View>
                    )}
                />

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
