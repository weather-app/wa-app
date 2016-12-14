
module.exports = function (d) {
    return {
        container: {
            backgroundColor: '#f4f4f4',
            height: d.dimensions.height,
            width: d.dimensions.width
        },
        backgroundImage: {
            top: 0,
            left: 0,
            position: 'absolute',
            width: d.dimensions.width,
            height: d.dimensions.height
        },
        titleText: {
            fontSize: 75 * d.x,
            width: d.dimensions.width,
            marginTop: 50 * d.x,
            textAlign : 'center',
            color: 'white',
            backgroundColor: 'transparent',
            fontFamily: 'Helvetica-Light',
            fontWeight: '200'
        },
        startButton: {
            position: 'absolute',
            justifyContent: 'center',
            bottom: 0,
            backgroundColor: '#078ae5',
            height: 120 * d.x,
            width: d.dimensions.width
        },
        startButtonText: {
            width: d.dimensions.width,
            textAlign : 'center',
            color: 'white',
            fontFamily: 'Helvetica-Light',
            fontWeight: '400'
        }
    }
};