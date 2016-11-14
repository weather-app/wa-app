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

import TopMenu from '../components/TopMenu';
import TaskGroup from '../components/TaskGroup';

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
                    <TopMenu/>

                    <Text style={styles.pageTitle}>Задачи</Text>

                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterTitle}>Фильтр</Text>
                    </TouchableOpacity>

                    <ScrollView
                        ref={(scrollView) => {_scrollView = scrollView;}}
                        automaticallyAdjustContentInsets={false}
                        scrollEventThrottle={200}
                        style={styles.taskList}>

                        {dates.map((date, index) => this.createTaskGroup(tasks.filter(t => t.date === date), index, date))}


                    </ScrollView>

                </View>;
    }
}

export default StartPage;

