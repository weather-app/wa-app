
module.exports = function (d) {
    return {
        container: {
            paddingLeft: 20 * d.x,
            paddingRight: 20 * d.x
        },
        groupHeader: {
            color: '#b6bec2',
            fontFamily: 'Helvetica',
            fontSize: 30 * d.x,
            marginTop: 40 * d.x,
            marginLeft: 10 * d.x
        }
    }
};