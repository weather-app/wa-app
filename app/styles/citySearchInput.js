
module.exports = function (d) {
    return {
        container: {
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            flexDirection:'row',
            justifyContent: 'center'
        },
        textInput: {
            color: '#fff',
            height: 90 * d.x,
            padding: 20 * d.x,
            marginTop: 30 * d.x,
            backgroundColor: 'rgba(0, 0, 0, .5)',
            borderRadius: 20 * d.x,
            width: 700 * d.x
        },
        clearButtonContainer: {
            backgroundColor: 'rgba(0, 0, 0, .5)',
            height: 90 * d.x,
            padding: 20 * d.x,
            marginTop: 30 * d.x,
            borderRadius: 20 * d.x,

        },
        clearButtonText: {
            color: '#fff',
            backgroundColor: '#000'
        },
        geoButtonImage: {
            height: 50 * d.x,
            width: 50 * d.x,
        },
        geoButton: {
            height: 90 * d.x,
            width: 90 * d.x,
            marginTop: 30 * d.x,
            justifyContent: 'center',
            alignItems: 'center'

        }
    }
};