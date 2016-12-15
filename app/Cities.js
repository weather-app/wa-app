
let data = require('./data.json').cities;

let listeners = [];

export default {
    getCities: function() {
        return data;
    },
    removeCity: function(cityId) {
        data = data.filter(c => c.cityId !== cityId);
        listeners.forEach(func => func.call(null));
    },
    getInfo: function(cityId) {
        return data.find(c => c.cityId === cityId);
    },
    addListener: function(func) {
        let index = listeners.indexOf(func);
        if (index !== -1)
            listeners.push(func);
    },
    removeListener: function(func) {
        let index = listeners.indexOf(func);
        if (index !== -1)
            listeners.splice(index, 1);
    }
}