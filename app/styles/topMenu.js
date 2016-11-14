
module.exports = function (d) {
    return {
        container: {
            backgroundColor: 'white',
            height: 50 * d.x,
            width: d.dimentions.width
        },
        button: {
            position: 'absolute',
            height: 50 * d.x,
            top: 0,
            width: 50 * d.x
        },
        hamButton: {
            left: 10 * d.x
        },
        iconImage: {
            height: 32 * d.x,
            marginLeft: 9 * d.x,
            marginTop: 9 * d.x,
            width: 32 * d.x,
        },
        profileButton: {
            alignSelf: 'center',
            backgroundColor: '#adb1b3',
            borderRadius: 20 * d.x,
            height: 40 * d.x,
            top: 5,
            width: 40 * d.x
        },
        notifyButton: {
            right: 75 * d.x
        },
        addButton: {
            right: 10 * d.x
        }
    }
};