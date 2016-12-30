
let tempCache = {};

export default {
    getTempInCity: function(cityId, date) {
        return new Promise(resolve => {
            setTimeout(() => { resolve(Math.floor(Math.random()* 30)) }, Math.random() * 1000);
        });
    },
    getTempInCities: function(cityIds, date) {
        return Promise.all(cityIds.map(cityId => this.getTempInCity(cityId, date)));
    },
    getTempInCitySync: function(cityId, date) {
        return Math.random() * 1000;
    }
}