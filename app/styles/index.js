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
    startPageElement: require('./startPageElement'),
    cityListElement: require('./cityListElement'),
    citiesList: require('./citiesList')
};

module.exports = function (m) {
    return styleFiles[m].bind(this)({
        dimentions: dimentions,
        x: x,
        vw: vw,
        vh: vh
    })
};