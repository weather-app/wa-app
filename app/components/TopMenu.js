/*
    Top Menu Component
 */

/*
    lib components import
*/

import React, {Component} from 'react';

import {
    Image,
    TouchableOpacity,
    View
} from 'react-native';

/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('topMenu');

class TopMenu extends Component {
    render () {
        return  <View style={styles.container}>
                    <TouchableOpacity style={Object.assign({}, styles.button, styles.hamButton)} onPress={() => {return false}}>
                        <Image style={styles.iconImage}  source={require('../images/icons/topMenuHamburger.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profileButton} onPress={() => {return false}} />

                    <TouchableOpacity style={Object.assign({}, styles.button, styles.notifyButton)} onPress={() => {return false}}>
                        <Image style={styles.iconImage}  source={require('../images/icons/topMenuNotification.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={Object.assign({}, styles.button, styles.addButton)} onPress={() => {return false}}>
                        <Image style={styles.iconImage}  source={require('../images/icons/topMenuAdd.png')} />
                    </TouchableOpacity>

                </View>;
    }
}

export default TopMenu;

