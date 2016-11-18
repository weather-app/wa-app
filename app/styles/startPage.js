
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
        title: {
            fontSize: 80 * d.x
        },
        button: {
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#078ae5'
        }
    }
};