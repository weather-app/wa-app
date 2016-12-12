
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
    View
} from 'react-native';

/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('cityPage');

class CityPage extends Component {

    render () {
        return  <View style={styles.container}>
                    <Image style={styles.bgImage}
                           source={require('../images/bg/bg-dayly-cloudy.png')}/>
                    <TouchableOpacity style={styles.menuButton}
                                      onPress={() => {return false;}}
                    >
                        <Image source={require('../images/icons/i-hamburger.png')}
                               style={styles.menuButtonImage}
                        />
                    </TouchableOpacity>
                    <Text style={styles.cityName}>Москва</Text>
                    <Text style={styles.cityDistrict}>Останкинский район</Text>
                    <Text style={styles.weatherDescription}>Ясно, дымка</Text>
                </View>
    }
}

export default CityPage;

