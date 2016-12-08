/*
    Start Page Component
 */

/*
    lib components import
 */

import React, {Component} from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Swipeout from 'react-native-swipeout';


/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('weatherButton');

class WeatherButton extends Component {
    constructor (props) {
        super(props);
        this.state= {isVisible: true};
    }

    render () {
        var swipeoutBtns = [
            {
                text: 'Удалить',
                backgroundColor: 'red',
                onPress: () => {
                    this.setState({isVisible: false});
                }
            }
        ];
        if (this.state.isVisible) {
            return <Swipeout right={swipeoutBtns}
                             autoClose={true}
                             close={false}
            >
                <TouchableOpacity style={styles.container} onPress={() => {
                    return false
                }}>
                    <Text style={styles.time}>{this.props.time}</Text>
                    <Text style={styles.city}>{this.props.city}</Text>
                    <Text style={styles.region}>{this.props.region || ''}</Text>
                    <Text style={styles.temp}>{this.props.temp}°</Text>
                </TouchableOpacity>
            </Swipeout>
        }
        return false;
    }

}

export default WeatherButton;

