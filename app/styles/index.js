import {Dimensions} from 'react-native';

const dimentions = Dimensions.get('window'),
    {
        width,
    } = dimentions;

const x = width / 1024;
const vw = width / 100 | 0;
const vh = width / 100 | 0;

const styleFiles = {
    startPage: require('./startPage'),
    startButton: require('./startButton'),
    weatherButton: require('./weatherButton'),
    weatherPage: require('./weatherPage')
};

module.exports = function (m) {
    return styleFiles[m].bind(this)({
        dimentions: dimentions,
        x: x,
        vw: vw,
        vh: vh
    })
};