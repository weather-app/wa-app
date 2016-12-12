
module.exports = function (d) {
    return {
        container: {
            width: d.dimentions.width,
            height: d.dimentions.height
        },
        bgImage: {
            position: 'absolute',
            resizeMode: 'cover',
            width: d.dimentions.width,
            height: d.dimentions.height,
        },
        menuButton: {
            position: 'absolute',
            right: 50 * d.x,
            top: 75 * d.x,
        },
        menuButtonImage: {
            width: 75 * d.x,
            height: 75 * d.x,
            resizeMode: 'cover'
        },
        cityName: {
            width: d.dimentions.width,
            textAlign: 'center',
            color: 'white',
            fontSize: 80 * d.x,
            fontWeight: '100',
            marginTop : 60 * d.x,
            fontFamily: 'Helvetica-Light'
        },
        cityDistrict: {
            width: d.dimentions.width,
            textAlign: 'center',
            color: 'white',
            fontSize: 35 * d.x,
            fontWeight: '100',
            fontFamily: 'Helvetica-Light'
        },
        weatherDescription: {
            width: d.dimentions.width,
            textAlign: 'center',
            color: 'white',
            fontSize: 45 * d.x,
            fontWeight: '100',
            fontFamily: 'Helvetica-Light'
        }
    }
};