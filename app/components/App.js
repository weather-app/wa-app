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


/*
    custom components import
*/

import StartPage from '../views/StartPage';

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
            <Navigator
                style={styles.container}
                initialRoute={{
                    title: 'Start Page',
                    component: StartPage
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component,
                        props =  {route: route, navigator: navigator, ...route.passProps};
                    return <Component {...props} />;
                }}
                navigationBarHidden={true}
            />
        );
    }

}

export default App;
