module.exports = function (d) {
    return {
        container: {
            backgroundColor: 'rgba(0, 0, 0, .4)',
            margin: 30 * d.x,
            borderRadius: 15 * d.x,
            paddingLeft: 30 * d.x,
            paddingRight: 30 * d.x,
            paddingTop: 20 * d.x,
            paddingBottom: 20 * d.x
        },
        block: {
            flexWrap: 'wrap',
            flexDirection:'row',
            paddingTop: 10 * d.x,
            marginTop: 15 * d.x,
            paddingBottom: 15 * d.x,
            borderBottomColor: 'white',
            borderBottomWidth: 1 * d.x,
            alignItems: 'center',
        },
        date: {
            color: 'white',
            fontSize: 33 * d.x,
            marginLeft: 10 * d.x,
            marginRight: 10 * d.x,
            fontFamily: 'Helvetica-Light'
        },
        dayOfWeek: {
            color: 'white',
            fontSize: 33 * d.x,
            marginLeft: 10 * d.x,
            marginRight: 10 * d.x,
            fontFamily: 'Helvetica-Light',
            fontWeight: '400'
        },
        weatherIcon: {
            height: 50 * d.x,
            resizeMode: 'contain',
            position: 'absolute',
            right: 250 * d.x,
        },
        dayTemp: {
            color: 'white',
            position: 'absolute',
            right: 150 * d.x,
            fontFamily: 'Helvetica-Light',
            fontWeight: '400'
        },
        nightTemp: {
            color: '#bcbcbc',
            position: 'absolute',
            right: 15 * d.x,
            fontFamily: 'Helvetica-Light',
            fontWeight: '400'
        },
    };
};