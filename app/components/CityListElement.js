/*
    Weather Button Component
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

import Cities from '../Cities';
import CityPage from '../views/CityPage';

/* components styles */

const styles = require('../../app/styles/')('cityListElement');

const weatherBgs = {
    clear: require('../images/bg/bg-clear.png'),
    'cloudy': require('../images/bg/bg-cloudy.png'),
    'small-cloudy': require('../images/bg/bg-small-cloudy.png'),
    'hardly-cloudy': require('../images/bg/bg-hardly-cloudy.png')
};

class WeatherButton extends Component {

    removeCity = () => {
        Cities.removeCity(this.props.cityId);
    };


    navigateToCity = () => {
        this.props.navigator.push({
            component: CityPage,
            passProps: {
                cityId: this.props.cityId
            }
        });
    };
    
    render () {
        var swipeoutBtns = [
            {
                text: 'Удалить',
                backgroundColor: '#ff4646',
                onPress: this.removeCity
            }
        ];
        return <Swipeout right={swipeoutBtns}
                         autoClose={true}
                         close={false}
        >
            <TouchableOpacity style={styles.container} onPress={this.navigateToCity}>
                <Image style={styles.weatherTypeImage} source={weatherBgs[this.props.weatherType ? this.props.weatherType : 'clear']} />
                <Text style={styles.time}>{this.props.time}</Text>
                {this.props.current ? <Image style={styles.geoposition} source={require('../images/icons/i-geoposition.png')}/> : false }
                <Text style={styles.city}>{this.props.city}</Text>
                <Text style={styles.region}>{this.props.region || ''}</Text>
                <Text style={styles.temp}>{this.props.temp}°</Text>
            </TouchableOpacity>
        </Swipeout>;
    }

}

export default WeatherButton;

