/*
    Home screen View
*/

/*
    lib components import
*/

import React, {Component} from 'react';

import {
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Button,
    View
} from 'react-native';


/* custom components import */

import WeatherButton from '../components/WeatherButton';

/* components styles */

const styles = require('../../app/styles/')('weatherPage');

class Weather extends Component {

    render () {
        return  <View style={styles.container}>

                    <WeatherButton
                        time="10:13"
                        city="Москва"
                        region="Останкинский район"
                        temp="21"
                    />
                    <WeatherButton
                        time="17:13"
                        city="Нижний Новгород"
                        temp="25"
                    />

                </View>;
    }
}

export default Weather;

