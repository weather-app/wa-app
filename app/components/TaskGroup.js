/*
 Top Menu Component
 */

/*
 lib components import
 */

import React, {Component} from 'react';

import {
    Text,
    View
} from 'react-native';

/* custom components import */

import TaskRow from '../components/TaskRow';

/* components styles */

const styles = require('../../app/styles/')('taskGroup');

class TaskGroup extends Component {
    constructor (props) {
        super(props);
    }

    createTask (index, task) {
        return <TaskRow key={index} task={task} />;
    }

    render () {
        return  <View style={styles.container}>
                    <Text style={styles.groupHeader}>{this.props.date}</Text>

                    {this.props.tasks.map((task, index) => this.createTask(index, task))}

                </View>
    }
}

export default TaskGroup;

