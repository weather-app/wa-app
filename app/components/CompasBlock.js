/*
    CompasBlockComponent
 */

/*
    lib components import
 */

import React, {Component} from 'react';

import {
    Animated,
    Text,
    View
} from 'react-native';

/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('compasBlock');


class StartButton extends Component {
    _animatedValue;

    constructor (props) {
        super(props);
        this.state = {
            _animatedValue: new Animated.Value(0),
            degrees: 120,
            prevDegrees: 0
        }
    }

    componentDidMount () {
        Animated.timing(this.state._animatedValue, {
            toValue: 100,
            duration: 3000
        }).start();
        setTimeout(() => {
            this.setDegrees(240);
        }, 5000)
    }

    setDegrees (newAngle)
    {
        this.setState(prevState => ({
            ...prevState,
            _animatedValue: new Animated.Value(0),
            prevDegrees: prevState.degrees,
            degrees: newAngle
        }));

        Animated.timing(
            this.state._animatedValue,
            {
                toValue: 100,
                duration: 3000
            }).start();
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
                            inputRange: [0, 100],
                            outputRange: [`${this.state.prevDegrees}deg`, `${this.state.degrees}deg`]
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

