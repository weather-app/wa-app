
module.exports = function (d) {
    return {
        container: {
            height: d.dimensions.height,
            width: d.dimensions.width
        },
        paginator: {
            position: 'absolute',
            top: -1200 * d.x,
            paddingTop: 0
        },
        bgImage: {
            position: 'absolute',
            resizeMode: 'cover',
            width: d.dimensions.width,
            height: d.dimensions.height,
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
            width: d.dimensions.width,
            textAlign: 'center',
            color: 'white',
            fontSize: 80 * d.x,
            fontWeight: '100',
            marginTop : 60 * d.x,
            fontFamily: 'Helvetica-Light'
        },
        cityDistrict: {
            width: d.dimensions.width,
            textAlign: 'center',
            color: 'white',
            fontSize: 35 * d.x,
            fontWeight: '100',
            fontFamily: 'Helvetica-Light'
        },
        weatherDescription: {
            width: d.dimensions.width,
            textAlign: 'center',
            color: 'white',
            fontSize: 45 * d.x,
            fontWeight: '100',
            fontFamily: 'Helvetica-Light',
            marginBottom: 30 * d.x
        }
    }
};