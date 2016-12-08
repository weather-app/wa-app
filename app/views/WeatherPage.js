
/*
    Weather Cities Screen View
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

var data = require('../data.json');

class Weather extends Component {

    render () {
        var currentTime = new Date();
        return  <View style={styles.container}>
                    {data.cities.map(function(city, index){
                        return <WeatherButton
                            cityId=index
                            time=city.time
                            city=city.name
                            region=city.region
                            temp=city.temp
                            weatherType=city.weatherType
                        />
                    })};
                    <View style={styles.addButtonContainer}>
                        <TouchableOpacity style={styles.addButton}
                                          onPress={() => {return false}}
                        >
                            <Image style={styles.addButtonImage}
                                   source={require('../images/icons/i-plus.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>;
    }
}

export default Weather;

