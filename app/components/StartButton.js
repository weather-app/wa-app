/*
    Start Button Component
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

/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('startButton');

class StartButton extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return  <TouchableOpacity style={styles.container}>
                    <Image style={styles.image}  source={this.props.image} />
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
    }
}

export default StartButton;

