
module.exports = function (d) {
    return {
        container: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            marginTop: d.vh * 5,
            marginLeft: d.vh * 5,
            marginRight: d.vh * 5
        },
        text: {
            color: '#fff',
            fontSize: 60 * d.x,
            textAlign: 'center'
        },
        image: {
            height: 60 * d.x
        }
    }
};