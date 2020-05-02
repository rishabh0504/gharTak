import React from 'react'
import {
    View, ScrollView, TouchableOpacity
} from 'react-native'
import { Stat } from './Stat';
import { Slide } from './Slide';
import { styles } from './style'
import { Row } from '@shoutem/ui';
import { Image, Tile, Title, Overlay, GridRow, Subtitle, Card, Caption, ImageBackground, TextInput, Text, Divider, Button, Icon } from '@shoutem/ui'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 1,
            intervals: 1,
            width: 0,
            items:
                [{
                    label: 'TODAY',
                    value: 1,
                }, {
                    label: 'THIS WEEK',
                    value: 39,
                }, {
                    label: 'THIS MONTH',
                    value: 120,
                }, {
                    label: 'YESTERDAY',
                    value: 3,
                }, {
                    label: 'LAST WEEK',
                    value: 25,
                }, {
                    label: 'LAST MONTH',
                    value: 175,
                }],
            style: 'stats',
            itemsPerInterval: 5,
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
                }
            ],
        }
    }
    componentWillMount() {

    }
    setWidth = (width) => {
        this.setState({ width })
    }
    setIntervals = (intervals) => {
        this.setState({ intervals })
    }
    setInterval = (interval) => {
        this.setState({ interval })
    }

    init = (width) => {
        // initialise width
        this.setWidth(width);
        // initialise total intervals
        const totalItems = this.state.items.length;
        this.setIntervals(Math.ceil(totalItems / this.state.itemsPerInterval));
    }

    getInterval = (offset) => {
        for (let i = 1; i <= this.state.intervals; i++) {
            if (offset < (this.state.width / this.state.intervals) * i) {
                return i;
            }
            if (i == this.state.intervals) {
                return i;
            }
        }
    }

    render() {
        let bullets = [];
        for (let i = 1; i <= this.state.intervals; i++) {
            bullets.push(
                <Text
                    key={i}
                    style={{
                        ...styles.bullet,
                        opacity: this.state.interval === i ? 0.5 : 0.1
                    }}
                >
                    &bull;
      </Text>
            );
        }
        const { items, restaurants } = this.state;

        const cellViews = restaurants.map((restaurant, id) => {
            return (
                <TouchableOpacity key={id} styleName="flexible">
                    <Card styleName="flexible">
                        <Image
                            styleName="medium-wide"
                            source={{ uri: restaurant.image.url }}
                        />
                        <View styleName="content">
                            <Subtitle numberOfLines={3}>{restaurant.name}</Subtitle>
                            <View styleName="horizontal">
                                <Caption styleName="collapsible" numberOfLines={2}>{restaurant.address}</Caption>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            );
        });
        return (
            <View style={styles.container}>

                <Row style={{ backgroundColor: 'transparent' }}>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ ...styles.scrollView, width: `${100 * this.state.intervals}%` }}
                        showsHorizontalScrollIndicator={false}
                        onContentSizeChange={(w, h) => this.init(w)}
                        onScroll={data => {
                            this.setWidth(data.nativeEvent.contentSize.width);
                            this.setInterval(this.getInterval(data.nativeEvent.contentOffset.x));
                        }}
                        scrollEventThrottle={200}
                        pagingEnabled
                        decelerationRate="fast"
                    >
                        <GridRow columns={3}>
                            {cellViews}
                        </GridRow>
                    </ScrollView>
                    <View style={styles.bullets}>
                        {bullets}
                    </View>
                </Row>

            </View>
        )


    }

}

export default Carousel;