
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

class Weather extends Component {


    render () {
        return  <View style={styles.container}>
                    <WeatherButton
                        cityId= '1'
                        time="10:13"
                        city="Москва"
                        region="Останкинский район"
                        temp="21"
                        weatherType="clear"
                        current={true}
                    />
                    <WeatherButton
                        cityId= '2'
                        time="10:13"
                        city="Сочи"
                        weatherType="cloudy"
                        temp="32"
                    />
                    <WeatherButton
                        cityId= '3'
                        time="17:13"
                        city="Хабаровск"
                        weatherType="small-cloudy"
                        temp="25"
                    />
                    <WeatherButton
                        cityId= '4'
                        time="17:13"
                        city="Нижний Новгород"
                        weatherType="hardly-cloudy"
                        temp="25"
                     />
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

