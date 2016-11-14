import React, {Component} from 'react';

import {AppRegistry} from 'react-native';

import App from './app/components/App';

class MAUI extends Component {
    render () {
        return <App />;
    }
}
AppRegistry.registerComponent('MAUI', () => MAUI);