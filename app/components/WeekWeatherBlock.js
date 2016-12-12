/*
    WeekWeatherBlock
 */

/*
 lib components import
 */

import React, {Component} from 'react';

import {
    Image,
    Text,
    View
} from 'react-native';

/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('weekWeatherBlock');

class WeekWeatherBlock extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return  <View style={styles.container}>
                    <View style={styles.block}>
                        <Text style={styles.date}>30 августа</Text>
                        <Text style={styles.dayOfWeek}>Вторник</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-sun.png')}
                        />
                        <Text style={styles.dayTemp}>27°</Text>
                        <Text style={styles.nightTemp}>23°</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.date}>31 августа</Text>
                        <Text style={styles.dayOfWeek}>Среда</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-cloud.png')}
                        />
                        <Text style={styles.dayTemp}>28°</Text>
                        <Text style={styles.nightTemp}>24°</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.date}>1 сентября</Text>
                        <Text style={styles.dayOfWeek}>Четверг</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-rainy-sun.png')}
                        />
                        <Text style={styles.dayTemp}>30°</Text>
                        <Text style={styles.nightTemp}>25°</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.date}>2 сентября</Text>
                        <Text style={styles.dayOfWeek}>Пятница</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-rainy-sun.png')}
                        />
                        <Text style={styles.dayTemp}>23°</Text>
                        <Text style={styles.nightTemp}>19°</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.date}>3 сентября</Text>
                        <Text style={styles.dayOfWeek}>Суббота</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-rainy.png')}
                        />
                        <Text style={styles.dayTemp}>20°</Text>
                        <Text style={styles.nightTemp}>16°</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.date}>4 сентября</Text>
                        <Text style={styles.dayOfWeek}>Воскресенье</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-cloudy-sun.png')}
                        />
                        <Text style={styles.dayTemp}>25°</Text>
                        <Text style={styles.nightTemp}>20°</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.date}>5 сентября</Text>
                        <Text style={styles.dayOfWeek}>Понедельник</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-cloudy-sun.png')}
                        />
                        <Text style={styles.dayTemp}>25°</Text>
                        <Text style={styles.nightTemp}>20°</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.date}>6 сентября</Text>
                        <Text style={styles.dayOfWeek}>Вторник</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-sun.png')}
                        />
                        <Text style={styles.dayTemp}>26°</Text>
                        <Text style={styles.nightTemp}>21°</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.date}>7 сентября</Text>
                        <Text style={styles.dayOfWeek}>Среда</Text>
                        <Image style={styles.weatherIcon}
                               source={require('../images/icons/i-rainy-sun.png')}
                        />
                        <Text style={styles.dayTemp}>17°</Text>
                        <Text style={styles.nightTemp}>12°</Text>
                    </View>
                </View>
    }
}

export default WeekWeatherBlock;

