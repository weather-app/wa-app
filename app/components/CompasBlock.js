/*
    CompasBlockComponent
 */

/*
    lib components import
 */

import React, {Component} from 'react';

import {
    Animated,
    DeviceEventEmitter,
    Text,
    View
} from 'react-native';

const ReactNativeHeading = require('react-native-heading');


/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('compasBlock');


class StartButton extends Component {
    _animatedValue;

    constructor (props) {
        super(props);
        this.state = {
            _animatedValue: new Animated.Value(0),
            degrees: 120
        }
    }

    componentDidMount () {

        Animated.timing(this.state._animatedValue, {
            toValue: this.state.degrees,
            duration: 15 * Math.abs(0 - this.state.degrees)
        }).start();

        setTimeout(() => {
            this.setState((prevState) => ({
                ...prevState,
                degrees: 240
            }));
        }, 5000);


        ReactNativeHeading.start(1)
            .then(didStart => {
                this.setState({
                    headingIsSupported: didStart,
                })
            });

        DeviceEventEmitter.addListener('headingUpdated', data => {
            alert(data.heading);
        });

    }

    componentWillUnmount () {
        ReactNativeHeading.stop();
        DeviceEventEmitter.removeAllListeners('headingUpdated');
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.degrees !== nextState.degrees) {
            this.state._animatedValue.setValue(this.state.degrees);
            Animated.timing(
                this.state._animatedValue,
                {
                    toValue: nextState.degrees,
                    duration: 15 * Math.abs(this.state.degrees - nextState.degrees)
                }).start();
        }
    }

    render () {

        return  (
            <View style={styles.container}>
                <Text style={Object.assign({color: 'yellow'}, styles.blockTitle)}>Приближается град</Text>
                <Text style={styles.blockSubTitle}>Начнется через 9 часов</Text>

                <View style={styles.compasContainer}>
                    <Animated.Image
                        source={require('../images/bg/bg-compas-external.png')}
                        style={Object.assign({transform: [{rotate: this.state._animatedValue.interpolate({
                            inputRange: [0, 360],
                            outputRange: [`0deg`, `360deg`]
                        })}] }, styles.imageExternal)}
                    />
                    <Animated.Image
                        source={require('../images/bg/bg-compas-internal.png')}
                        style={styles.imageInternal}
                    />
                </View>

                <Text style={styles.windContainer}>
                    <Text style={styles.windStrengthLabel}>Ветер:  </Text>
                    <Text style={styles.windStrengthValue}>ю/в 3 м/с</Text>
                </Text>
            </View>
        )
    }
}

export default StartButton;

