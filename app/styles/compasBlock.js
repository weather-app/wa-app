
module.exports = function (d) {
    return {
        container: {
            backgroundColor: 'rgba(0, 0, 0, .4)',
            margin: 30 * d.x,
            borderRadius: 15 * d.x,
            paddingLeft: 30 * d.x,
            paddingRight: 30 * d.x,
            paddingTop: 20 * d.x,
            paddingBottom: 60 * d.x,
            alignItems: 'center'
        },
        blockTitle: {
            fontSize: 45 * d.x
        },
        blockSubTitle: {
            color: 'white',
            fontSize: 30 * d.x
        },
        windStrengthLabel: {
            color: 'white',
            fontSize: 30 * d.x
        },
        windStrengthValue: {
            color: 'white',
            fontSize: 30 * d.x,
            fontWeight: 'bold'
        },
        windContainer: {
            position: 'absolute',
            right: 20 * d.x,
            bottom: 20 * d.x
        },
        compasContainer: {
            width: d.dimensions.width / 2,
            height: d.dimensions.width / 2,
            marginTop: 20 * d.x
        },
        imageExternal : {
            width: d.dimensions.width / 2,
            height: d.dimensions.width / 2,
            position: 'absolute',
            top: 0,
            left: 0
        },
        imageInternal: {
            width: (d.dimensions.width / 2) - 120 * d.x,
            height: (d.dimensions.width / 2) - 120 * d.x,
            position: 'absolute',
            top: 60 * d.x,
            left: 60 * d.x
        }
    }
};