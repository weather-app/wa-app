/*
   DayWeatherBlock
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

const styles = require('../../app/styles/')('dayWeatherBlock');

class DayWeatherBlock extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return  <View style={styles.container}>
                    <View style={styles.block}>
                        <Text style={styles.time}>6:00</Text>
                        <Image style={styles.image}
                               source={require('../images/icons/i-sunrise.png')}
                        />
                        <Text style={styles.temperature}>23°</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.time}>9:00</Text>
                        <Image style={styles.image}
                               source={require('../images/icons/i-sun.png')}
                        />
                        <Text style={styles.temperature}>23°</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.time}>12:00</Text>
                        <Image style={styles.image}
                               source={require('../images/icons/i-sun.png')}
                        />
                        <Text style={styles.temperature}>23°</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.time}>15:00</Text>
                        <Image style={styles.image}
                               source={require('../images/icons/i-cloud.png')}
                        />
                        <Text style={styles.temperature}>23°</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.time}>18:00</Text>
                        <Image style={styles.image}
                               source={require('../images/icons/i-rainy-sun.png')}
                        />
                        <Text style={styles.temperature}>23°</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.time}>21:00</Text>
                        <Image style={styles.image}
                               source={require('../images/icons/i-sunset.png')}
                        />
                        <Text style={styles.temperature}>22°</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.time}>00:00</Text>
                        <Image style={styles.image}
                               source={require('../images/icons/i-cloudy-moon.png')}
                        />
                        <Text style={styles.temperature}>18°</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.time}>3:00</Text>
                        <Image style={styles.image}
                               source={require('../images/icons/i-moon.png')}
                        />
                        <Text style={styles.temperature}>17°</Text>
                    </View>
                </View>
    }
}

export default DayWeatherBlock;

