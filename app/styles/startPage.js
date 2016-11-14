
module.exports = function (d) {
    return {
        container: {
            backgroundColor: '#f4f4f4',
            height: d.dimentions.height,
            width: d.dimentions.width
        },
        pageTitle: {
            color: '#b6bec2',
            fontFamily: 'Helvetica',
            fontSize: 40 * d.x,
            height: 50 * d.x,
            position: 'absolute',
            top: 100 * d.x,
            left: 100 * d.x
        },
        filterButton: {
            height: 40 * d.x,
            position: 'absolute',
            right: 75 * d.x,
            top: 100 * d.x,
            width: 100 * d.x
        },
        filterTitle: {
            bottom: 0,
            fontFamily: 'Helvetica',
            fontSize: 17 * d.x,
            position: 'absolute',

        },
        taskList: {
            backgroundColor: 'white',
            bottom: 0,
            height: d.dimentions.height - 175 * d.x,
            left: 100 * d.x,
            position: 'absolute',
            width: d.dimentions.width - 200 * d.x
        }
    }
};