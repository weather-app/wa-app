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

//import Swipeout from 'react-native-swipeout';

/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('weatherButton');

class WeatherButton extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return  <TouchableOpacity style={styles.container} onPress={() => {return false}}>
                    <Text style={styles.time}>{this.props.time}</Text>
                    <Text style={styles.city}>{this.props.city}</Text>
                    <Text style={styles.region}>{this.props.region || ''}</Text>
                    <Text style={styles.temp}>{this.props.temp}°</Text>
                </TouchableOpacity>
    }
}

export default WeatherButton;

