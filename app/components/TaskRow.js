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

/* components styles */

const styles = require('../../app/styles/')('taskRow');

class TaskRow extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return  <View style={styles.container}>
                    <Text style={styles.beginText}>{this.props.task.begin}</Text>
                    <Text style={Object.assign({}, styles.beginText, styles.titleText)}>{this.props.task.title}</Text>
                    <Text style={Object.assign({}, styles.beginText, styles.requesterText)}>{this.props.task.requester}</Text>
                    <Text style={Object.assign({}, styles.beginText, styles.projectText)}>{this.props.task.project}</Text>
                </View>
    }
}

export default TaskRow;

