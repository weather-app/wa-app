
module.exports = function (d) {
    return {
        container: {
            width: d.dimentions.width,
            height: d.dimentions.height,
            backgroundColor: '#383838'
        },
        noFoundBlock: {
            backgroundColor: 'rgba(0, 0, 0, .5)',
            marginTop: 30 * d.x,
            borderRadius: 20 * d.x,
            justifyContent: 'center',
            alignItems: 'center'
        },
        notFoundText: {
            color: 'white',
            margin: 30 * d.x,
            fontFamily: 'Helvetica-Light',
            textAlign: 'center'
        },
        geoButtonImage: {
            width: 75 * d.x,
            height: 75 * d.x,
            resizeMode: 'contain',
            marginTop: 5 * d.x,
            marginRight: 5 * d.x
        },
        geoButton: {
            borderWidth: 2 * d.x,
            borderRadius: 20 * d.x,
            padding: 10 * d.x,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30 * d.x,
        },
        resultsView: {
            marginTop: 30 * d.x,
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderRadius: 20 * d.x,

        },
        resultBlock: {
            borderBottomColor: 'white',
            borderBottomWidth: 1 * d.x,
            marginBottom: 10 * d.x,
            paddingTop: 10 * d.x,
            flexWrap: 'nowrap',
            flexDirection:'row',
            alignItems: 'center'
        },
        cityIcon: {
            width: 100 * d.x,
            height: 100 * d.x,
            resizeMode: 'cover',
            margin: 10 * d.x
        },
        cityTemp: {
            color: 'white',
            fontFamily: 'Helvetica-Light',
            position: 'absolute',
            right: 30 * d.x,
            top: 40 * d.x,
            fontWeight: 'bold'
        },
        cityDist: {
            color: 'white',
            fontFamily: 'Helvetica-Light',
            position: 'absolute',
            right: 150 * d.x,
            top: 40 * d.x,
            width: 175 * d.x
        },
        cityName: {
            color: 'white',
            fontFamily: 'Helvetica-Light',
            position: 'absolute',
            left: 150 * d.x,
            top: 40 * d.x,
            fontWeight: 'bold',
            width: 550 * d.x
        }
    }
};