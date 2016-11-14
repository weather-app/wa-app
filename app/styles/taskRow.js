
module.exports = function (d) {
    return {
        container: {
            borderBottomColor: '#c0c7cb',
            borderBottomWidth: 1,
            height: 100 * d.x,
            padding: 10 * d.x
        },
        beginText: {
            fontFamily: 'Helvetica',
            fontSize: 18 * d.x,
            fontWeight: '400',
            position: 'absolute'
        },
        titleText: {
            fontFamily: 'Helvetica',
            fontSize: 18 * d.x,
            fontWeight: '400',
            left: 200 * d.x,
            position: 'absolute'
        },
        requesterText: {
            fontFamily: 'Helvetica',
            fontSize: 18 * d.x,
            fontWeight: '500',
            left: 200 * d.x,
            position: 'absolute',
            top: 35 * d.x
        },
        projectText: {
            color: '#b7bfc3',
            fontFamily: 'Helvetica',
            fontSize: 18 * d.x,
            left: 200 * d.x,
            position: 'absolute',
            top: 60 * d.x
        }
    }
};