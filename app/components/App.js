/*
    core App component
*/


/*
    lib components import
*/

import React, {Component} from 'react';

import {
    Navigator,
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

/*
    custom components import
*/

import StartPage from '../views/StartPage';
import CitiesList from '../views/CitiesList';
import CityPage from '../views/CityPage';
import CitySearch from '../views/CitySearch';
import LandingPage from '../views/LandingPage';

/*
    components styles
*/

const styles = {
    container: {
        flex: 1
    }
};

class App extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <LandingPage />
            </Provider>
        );
    }

}

export default App;
