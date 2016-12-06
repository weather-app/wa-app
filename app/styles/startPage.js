
module.exports = function (d) {
    return {
        container: {
            backgroundColor: '#f4f4f4',
            height: d.dimentions.height,
            width: d.dimentions.width
        },
        backgroundImage: {
            top: 0,
            left: 0,
            position: 'absolute',
            width: d.dimentions.width,
            height: d.dimentions.height
        },
        titleText: {
            fontSize: 75 * d.x,
            width: d.dimentions.width,
            textAlign : 'center',
            // lineHeight: 240* d.x,
            color: 'white',
            backgroundColor: 'transparent',
            fontFamily: 'Helvetica-Light',
            fontWeight: '200'
        },
        startButton: {
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#078ae5',
            height: 120 * d.x,
            width: d.dimentions.width
        },
        startButtonText: {
            width: d.dimentions.width,
            textAlign : 'center',
            // lineHeight: 120* d.x,
            color: 'white',
            fontFamily: 'Helvetica-Light',
            fontWeight: '400'
        }
    }
};