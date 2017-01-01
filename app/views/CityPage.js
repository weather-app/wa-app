
/*
    City Page
 */

/*
 lib components import
 */

import React, {Component} from 'react';

import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    BackAndroid
} from 'react-native';

import Swiper from 'react-native-swiper';

/* custom components import */

import DayWeatherBlock from '../components/DayWeatherBlock';
import WeekWeatherBlock from '../components/WeekWeatherBlock';
import CityInfo from '../components/CityInfo';
import CompasBlock from '../components/CompasBlock';
import Cities from '../Cities';

/* components styles */

const styles = require('../../app/styles/')('cityPage');

class CityPage extends Component {

    backListener = () => {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
            this.props.navigator.pop();
            return true;
        }
        return false;
    };

    componentWillMount()
    {
        BackAndroid.addEventListener('hardwareBackPress',this.backListener);
    }
    componentWillUnmount()
    {
        BackAndroid.removeEventListener('hardwareBackPress',this.backListener);
    }

    render () {

        let infos = Cities.getCities();
        let swipeIndex = infos.findIndex(info => info.cityId === this.props.cityId);

        return <View  style={styles.container}>
                    <Swiper  paginationStyle={styles.paginator} index={swipeIndex}>
                        {infos.map(city => {
                            return <View style={styles.container} key={city.cityId}>
                                <Image style={styles.bgImage}
                                       source={require('../images/bg/bg-dayly-cloudy.png')}/>
                                <Text style={styles.cityName}>{city.name}</Text>
                                <Text style={styles.cityDistrict}>{city.region}</Text>
                                <Text style={styles.weatherDescription}>Ясно, дымка</Text>

                                <CityInfo cityId={city.cityId}/>

                                <ScrollView>
                                    <CompasBlock />
                                    <DayWeatherBlock cityId={city.cityId} />

                                    <WeekWeatherBlock cityId={city.cityId} />
                                </ScrollView>
                            </View>
                        })}
                    </Swiper>

                    <TouchableOpacity style={styles.menuButton}
                                      onPress={() => {return false;}}>
                        <Image source={require('../images/icons/i-hamburger.png')}
                               style={styles.menuButtonImage}/>
                    </TouchableOpacity>
                </View>
    }
}

export default CityPage;

