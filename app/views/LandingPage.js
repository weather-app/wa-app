
/*
    Landing Page
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

import Weather from './CitiesList';

/* components styles */

const styles = require('../../app/styles/')('landingPage');

class LandingPage extends Component {

    navigateToMainPage = () => {
        this.props.navigator.push({
            component: Weather
        });
    };

    render () {
        return <View  style={styles.container}>
                    <Image source={require('../images/bg/bg-sunset-cloudy.png')}
                           style={styles.bgImage}
                    />

                    <View style={styles.iconContainer}>
                        <Image source={require('../images/icons/i-app-icon.png')}
                               style={styles.appIcon}
                        />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.caption}>Актуальная погода</Text>
                        <Text style={styles.description}>С помощью приложения Погода Live можно видеть температуру на основном экране, а также получать уведомления о погоде для текущего местоположения.</Text>
                        <Text style={styles.description}>Для использования этих функций необходимо разрешение на использования Центра уведомлений.</Text>
                    </View>

                    <TouchableOpacity style={styles.acceptButton} onPress={this.navigateToMainPage}>
                        <Text style={styles.acceptButtonText}>Да, я понимаю</Text>
                    </TouchableOpacity>
                </View>
    }
}

export default LandingPage;

