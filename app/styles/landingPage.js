
module.exports = function (d) {
    return {
        iconContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            width: d.dimensions.width,
            height: 250 * d.x,
            top: 350 * d.x

        },
        bgImage: {
            width: d.dimensions.width,
            height: d.dimensions.height,
            resizeMode: 'contain'
        },
        acceptButton: {
            position: 'absolute',
            bottom: 0,
            height: 130 * d.x,
            backgroundColor: 'white',
            width: d.dimensions.width,
            justifyContent: 'center',
            alignItems: 'center',
        },
        acceptButtonText: {
            color: '#0255F9',
            fontFamily: 'helvetica-Light',
            fontWeight: '400',
            fontSize: 50 * d.x
        },
        appIcon: {
            width: 250 * d.x,
            height: 250 * d.x,
            resizeMode: 'contain'
        },
        textContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            width: d.dimensions.width - 60 * d.x,
            top: 620 * d.x,
            backgroundColor: 'rgba(0, 0, 0, .5)',
            padding: 35 * d.x,
            borderRadius: 20 * d.x,
            margin: 30 * d.x
        },
        caption: {
            color: 'white',
            fontSize: 70 * d.x,
            fontFamily: 'Helvetica-Light',
            fontWeight: 'bold',
            marginBottom: 20 * d.x
        },
        description: {
            color: 'white',
            textAlign: 'center',
            fontSize: 40 * d.x,
            fontFamily: 'Helvetica-Light',
            marginTop: 30 * d.x
        }
    };
};