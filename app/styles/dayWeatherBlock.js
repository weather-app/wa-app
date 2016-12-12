module.exports = function (d) {
    return {
        container: {
            backgroundColor: 'rgba(0, 0, 0, .4)',
            margin: 30 * d.x,
            borderRadius: 15 * d.x,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            flexDirection:'row',
            paddingLeft: 30 * d.x,
            paddingRight: 30 * d.x,
            paddingTop: 20 * d.x,
            paddingBottom: 20 * d.x
        },
        block: {
            flex: .125,
            height: 150 * d.x,
            margin: 5 * d.x,
            alignItems: 'center',
            justifyContent: 'center'
        },
        time: {
            color: 'white',
            fontFamily: 'Helvetica-Light',
            fontSize: 30 * d.x,
            fontWeight: '400',
            marginBottom: 10 * d.x
        },
        temperature: {
            color: 'white',
            fontFamily: 'Helvetica-Light',
            fontSize: 30 * d.x,
            fontWeight: '500',
            marginTop: 20 * d.x
        },
        image: {
            height: 40 * d.x,
            resizeMode: 'contain'
        }
    };
};