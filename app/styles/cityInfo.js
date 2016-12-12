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
            borderBottomColor: '#d5d5d5',
            borderBottomWidth: 1 * d.x,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            flexDirection:'row'
        },
        bySence: {
            flex: .3,
            flexDirection:'row',
            flexWrap: 'nowrap'
        },
        bySenceLabel: {
            color: 'white',
            fontSize: 30 * d.x,
            marginTop: 40 * d.x,
            fontFamily: 'Helvetica-Light'
        },
        byTemp: {
            color: 'white',
            fontSize: 30 * d.x,
            marginTop: 40 * d.x,
            marginLeft: 20 * d.x,
            fontFamily: 'Helvetica-Light'
        },
        dateBlock: {
            flex: .4,
            justifyContent: 'center',
            alignItems: 'center',

        },
        timeLabel: {
            color: 'white',
            fontSize: 100 * d.x,
            fontFamily: 'Helvetica-Light',
            fontWeight: '100',
            textAlign: 'center'
        },
        dateLabel: {
            color: 'white',
            fontSize: 30 * d.x,
            fontFamily: 'Helvetica-Light',
            fontWeight: '100',
            textAlign: 'center'
        },
        minmaxBlock: {
            flex: .3,
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            flexDirection:'row',
            marginTop: 40 * d.x
        },
        minLabel: {
            color: 'white',
            fontSize: 30 * d.x,
            fontFamily: 'Helvetica-Light',
            fontWeight: '100',
            textAlign: 'center'
        },
        minText: {
            color: 'white',
            fontSize: 30 * d.x,
            fontFamily: 'Helvetica-Light',
            fontWeight: '100',
            marginLeft: 10 * d.x,
            textAlign: 'center'
        },
        dayTimeBlock: {
            padding: 10 * d.x,
            borderBottomColor: '#d5d5d5',
            borderBottomWidth: 1 * d.x,
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            flexDirection:'row',
            paddingTop: 20 * d.x,
            paddingBottom: 20 * d.x
        },
        sunRiseBlock: {
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        sunSetBlock: {
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        rainBlock: {
            flex: 0.35,
            justifyContent: 'center',
            alignItems: 'center',
        },
        humidityBlock: {
            flex: 0.25,
            justifyContent: 'center',
            alignItems: 'center',
        },
        dayTimeLabel: {
            color: 'white',
            fontWeight: '200',
            fontSize: 30 * d.x,
            fontFamily: 'Helvetica-Light',
            marginBottom: 10 * d.x
        },
        dayTimeText: {
            color: 'white',
            fontWeight: '400',
            fontSize: 35 * d.x,
            fontFamily: 'Helvetica-Light'
        }

    }
};