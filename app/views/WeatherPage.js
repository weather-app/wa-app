
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
                        cityId= '1'
                        time="10:13"
                        city="Москва"
                        region="Останкинский район"
                        temp="21"
                    />
                    <WeatherButton
                        cityId= '2'
                        time="10:13"
                        city="Сочи"
                        temp="32"
                    />
                    <WeatherButton
                        cityId= '3'
                        time="17:13"
                        city="Хабаровск"
                        temp="25"
                    />
                    <WeatherButton
                        cityId= '4'
                        time="17:13"
                        city="Нижний Новгород"
                        temp="25"
                     />
                </View>;
    }
}

export default Weather;

