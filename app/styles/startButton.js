
module.exports = function (d) {
    return {
        container: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            margin: d.vh * 5,
            padding: d.vh * 5,
            borderRadius: 20 * d.x,
            alignItems: 'center'
        },
        text: {
            color: '#fff',
            fontSize: 40 * d.x,
            margin: 30 * d.x,
            textAlign: 'center'
        },
        image: {
            height: 90 * d.x,
            resizeMode: 'contain',
        }
    }
};