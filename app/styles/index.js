import {Dimensions} from 'react-native';

const dimentions = Dimensions.get('window'),
    {
        width,
    } = dimentions;

const x = width / 1024;

const styleFiles = {
    startPage: require('./startPage'),
    taskGroup: require('./taskGroup'),
    taskRow: require('./taskRow'),
    topMenu: require('./topMenu')
};

module.exports = function (m) {
    return styleFiles[m].bind(this)({
        dimentions: dimentions,
        x: x
    })
};