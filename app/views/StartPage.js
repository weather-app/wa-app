/*
    Home screen View
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

import StartButton from '../components/StartPageElement';

/* components styles */

const styles = require('../../app/styles/')('startPage');

class StartPage extends Component {

    render () {
        return  <View style={styles.container}>

                    <Image style={styles.backgroundImage}  source={require('../images/bg/bg-homescreen.png')} />

                    <Text style={styles.titleText}>Актуальная погода</Text>

                    <StartButton text="Вы можите видеть погодные условия." image={require('../images/icons/i-sun.png')} />
                    <StartButton text="Получать уведомления об осадках заблаговременно для текуего местоположения" image={require('../images/icons/i-notify.png')} />
                    <StartButton text="Узнать с какой стороны приближаются к вам осадки и через какое время у вас будет дождь" image={require('../images/icons/i-rain.png')} />

                    <TouchableOpacity style={styles.startButton}
                                      onPress={() => false}
                    >
                        <Text style={styles.startButtonText}>
                            Начать использование
                        </Text>
                    </TouchableOpacity>
                </View>;
    }
}

export default StartPage;

