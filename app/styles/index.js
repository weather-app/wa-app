import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window'),
    {
        width,
        height
    } = dimensions;

const x = width / 1024;
const vw = width / 100 | 0;
const vh = width / 100 | 0;

const styleFiles = {
    startPage: require('./startPage'),
    startPageElement: require('./startPageElement'),
    cityListElement: require('./cityListElement'),
    citiesList: require('./citiesList'),
    cityPage: require('./cityPage'),
    compasBlock: require('./compasBlock'),
    dayWeatherBlock: require('./dayWeatherBlock'),
    weekWeatherBlock: require('./weekWeatherBlock'),
    cityInfo: require('./cityInfo'),
    citySearch: require('./citySearch'),
    citySearchInput: require('./citySearchInput'),
    landingPage: require('./landingPage')
};

module.exports = function (m) {
    return styleFiles[m].bind(this)({
        dimensions: dimensions,
        x: x,
        vw: vw,
        vh: vh
    })
};