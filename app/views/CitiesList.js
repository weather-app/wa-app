
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

import WeatherButton from '../components/CityListElement';

/* components styles */

const styles = require('../../app/styles/')('citiesList');

import Cities from '../Cities';

class Weather extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            cities: Cities.getCities(),
            temp: []
        };
    }

    onCityInfoChange_ = () => {
        this.setState((prevState) => {
            return {
                cities: Cities.getCities(),
                ...prevState
            }
        });
    };

    componentWillMount()
    {
        Cities.addListener(this.onCityInfoChange_);
    }
    componentWillUnmount()
    {
        Cities.removeListener(this.onCityInfoChange_);
    }

    componentDidMount()
    {

    }

    render () {
        return  <View style={styles.container}>
                    {this.state.cities.map((city) => {
                        return <WeatherButton
                            key={'wb-' + city.cityId}
                            cityId={city.cityId}
                            current={city.current}
                            navigator={this.props.navigator}
                        />
                    })}
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

