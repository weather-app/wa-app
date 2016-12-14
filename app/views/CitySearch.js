
/*
    City Search Page
 */

/*
 lib components import
 */

import React, {Component} from 'react';
import { TextInput } from 'react-native';

import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

/* custom components import */

import DayWeatherBlock from '../components/DayWeatherBlock';
import WeekWeatherBlock from '../components/WeekWeatherBlock';
import CitySearchInput from '../components/CitySearchInput';

/* components styles */

const styles = require('../../app/styles/')('citySearch');

class CitySearch extends Component {

    onTextChange () {

    }

    render () {
        return  <View style={styles.container}>
                    <CitySearchInput />

                    <View style={styles.variantsContainer}>
                        <View>
                            <Text >Ничего не найдено, попробуйте воспользоваться геопоиском, нажав на кнопку</Text>

                            <TouchableOpacity style={styles.geoButton}>
                                <Image source={require('../images/icons/i-geoposition.png')}
                                       style={styles.geoButtonImage}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
    }
}

export default CitySearch;

