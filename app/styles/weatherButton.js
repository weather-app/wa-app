module.exports = function (d) {
    return {
        container: {
            backgroundColor: 'rgba(0, 85, 218, 0)',
            width: d.dimentions.width,
            padding: 60 * d.x,
            paddingTop: 20 * d.x,
            paddingBottom: 20 * d.x,
            // marginBottom: -1 * d.x,

        },
        geoposition: {
            position: 'absolute',
            left: 175 * d.x,
            width: 50 * d.x,
            height: 50 * d.x,
            top: 20 * d.x
        },
        time: {
            color: '#fff'
        },
        city: {
            fontSize: 80 * d.x,
            color: '#fff'
        },
        region: {
            color: '#fff'
        },
        temp: {
            color: '#fff',
            position: 'absolute',
            right: 60 * d.x,
            top: 60 * d.x,
            fontSize: 100 * d.x
        },
        weatherTypeImage: {
            position: 'absolute',
            width: d.dimentions.width,
            resizeMode: 'cover'
        }
    }
};