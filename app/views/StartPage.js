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
    Button,
    View
} from 'react-native';


/* custom components import */

import StartButton from '../components/StartButton';

/* components styles */

const styles = require('../../app/styles/')('startPage');

/* data */
const tasks = require('../data/tasks.json');
const dates = [];

tasks.forEach(t => {
    if (dates.indexOf(t.date) === -1) {
        dates.push(t.date)
    }
});

class StartPage extends Component {

    createTaskGroup (filteredTasks, index, date) {
        return <TaskGroup key={index} date={date} tasks={filteredTasks}/>;
    }

    render () {
        return  <View style={styles.container}>

                    <Image style={styles.backgroundImage}  source={require('../images/background.png')} />

                    <Text style={styles.title}>Актуальная погода</Text>

                    <StartButton text="Вы можите видеть погодные условия." image={require('../images/sun.png')} />
                    <StartButton text="Получать уведомления об осадках заблаговременно для текуего местоположения" image={require('../images/notify.png')} />
                    <StartButton text="Узнать с какой стороны приближаются к вам осадки и через какое время у вас будет дождь" image={require('../images/rain.png')} />

                    <TouchableOpacity style={styles.button}>
                        <Text>Начать использование</Text>
                    </TouchableOpacity>
                </View>;
    }
}

export default StartPage;

