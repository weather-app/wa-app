/*
    Weather Button Component
 */

/*
    lib components import
 */

import React, {Component} from 'react';

import {
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

import Swipeout from 'react-native-swipeout';


/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('citySearchInput');

class CitySearchInput extends Component {
    constructor (props) {
        super(props);

        this.state= {text: ''};
    }

    onTextChange(text) {
        this.setState({text});
        if (this.props.onTextChanged)
            this.props.onTextChanged(text);
    }

    render () {
        return  <View style={styles.container}>
                    <TextInput
                        value={this.state.text}
                        style={styles.textInput}
                        placeholder={'Введите город'}
                        placeholderTextColor={'#c5c5c5'}
                        onChangeText={this.onTextChange.bind(this)}
                    />
                    <TouchableOpacity style={styles.geoButton}>
                        <Image source={require('../images/icons/i-geoposition.png')}
                               style={styles.geoButtonImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.clearButtonContainer}
                        onPress={() => this.onTextChange('')}
                    >
                        <Text style={styles.clearButtonText}>Очистить</Text>
                    </TouchableOpacity>
                </View>
    }

}

export default CitySearchInput;

