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
        tempBlock: {
            padding: 10 * d.x,
            borderBottomColor: 'white',
            borderBottomWidth: 1 * d.x
        },
        dayTimeBlock: {
            padding: 10 * d.x,
            borderBottomColor: 'white',
            borderBottomWidth: 1 * d.x
        }
    }
};