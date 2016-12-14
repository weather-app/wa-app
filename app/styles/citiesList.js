
module.exports = function (d) {
    return {
        container: {
            backgroundColor: '#232323',
            height: d.dimensions.height,
            width: d.dimensions.width
        },
        addButton: {
            margin: 30 * d.x,
        },
        addButtonImage: {
            width: 75 * d.x,
            height: 75 * d.x
        },
        addButtonContainer: {
            width:  d.dimensions.width,
            height: (75 + 40) * d.x,
            flex: 1,
            alignItems: 'flex-end',
        }
    }
};