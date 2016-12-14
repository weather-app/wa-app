
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
    ScrollView,
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
                        <View style={styles.noFoundBlock}>
                            <Text style={styles.notFoundText}>Ничего не найдено, попробуйте воспользоваться геопоиском, нажав на кнопку</Text>

                            <TouchableOpacity style={styles.geoButton}>
                                <Image source={require('../images/icons/i-geoposition.png')}
                                       style={styles.geoButtonImage}
                                />
                            </TouchableOpacity>

                        </View>
                        <ScrollView style={styles.resultsView}>

                            <TouchableOpacity style={styles.resultBlock}>
                                <Image source={require('../images/icons/i-Russia.png')}
                                       style={styles.cityIcon}/>
                                <Text style={styles.cityName}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>Москва</Text>
                                <Text style={styles.cityDist}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>10 км.</Text>
                                <Text style={styles.cityTemp}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>23°</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.resultBlock}>
                                <Image source={require('../images/icons/i-Israel.png')}
                                       style={styles.cityIcon}/>
                                <Text style={styles.cityName}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>Иерусалим</Text>
                                <Text style={styles.cityDist}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>700 км.</Text>
                                <Text style={styles.cityTemp}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>23°</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.resultBlock}>
                                <Image source={require('../images/icons/i-USA.png')}
                                       style={styles.cityIcon}/>
                                <Text style={styles.cityName}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>Нью-Йорк</Text>
                                <Text style={styles.cityDist}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>1000 км.</Text>
                                <Text style={styles.cityTemp}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>23°</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.resultBlock}>
                                <Image source={require('../images/icons/i-Russia.png')}
                                       style={styles.cityIcon}/>
                                <Text style={styles.cityName}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>Москва</Text>
                                <Text style={styles.cityDist}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>10 км.</Text>
                                <Text style={styles.cityTemp}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>23°</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.resultBlock}>
                                <Image source={require('../images/icons/i-UnitedKingdom.png')}
                                       style={styles.cityIcon}/>
                                <Text style={styles.cityName}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>Лондон</Text>
                                <Text style={styles.cityDist}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>200 км.</Text>
                                <Text style={styles.cityTemp}
                                      ellipsizeMode="tail"
                                      numberOfLines={1}>23°</Text>
                            </TouchableOpacity>

                        </ScrollView>

                    </View>
                </View>
    }
}

export default CitySearch;

