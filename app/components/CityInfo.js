/*
   CityInfo
 */

/*
 lib components import
 */

import React, {Component} from 'react';

import {
    Text,
    View
} from 'react-native';

/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('cityInfo');

class CityInfo extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return  <View style={styles.container}>
                    <View style={styles.tempBlock}>

                    </View>

                    <View style={styles.dayTimeBlock}>

                    </View>

                    <View style={styles.weatherBlock}>

                    </View>
                </View>
    }
}

export default CityInfo;

