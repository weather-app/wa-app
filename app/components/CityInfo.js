/*
   CityInfo
 */

/*
 lib components import
 */

import React, {Component} from 'react';

import {
    Text,
    View
} from 'react-native';

/* custom components import */

/* components styles */

const styles = require('../../app/styles/')('cityInfo');

class CityInfo extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return  <View style={styles.container}>
                    <View style={styles.tempBlock}>
                        <View style={styles.bySence}>
                            <Text style={styles.bySenceLabel}>По-ощущениям</Text>
                            <Text style={styles.byTemp}>17°</Text>
                        </View>
                        <View style={styles.dateBlock}>
                            <Text style={styles.timeLabel}>10:13</Text>
                            <Text style={styles.dateLabel}>Понедельник, 29 августа</Text>
                        </View>
                        <View style={styles.minmaxBlock}>
                            <Text style={styles.minLabel}>Мин</Text>
                            <Text style={styles.minText}>17°</Text>
                            <Text style={styles.minLabel}> | Макс</Text>
                            <Text style={styles.minText}>23°</Text>
                        </View>
                    </View>

                    <View style={styles.dayTimeBlock}>
                        <View style={styles.sunRiseBlock}>
                            <Text style={styles.dayTimeLabel}>Восход</Text>
                            <Text style={styles.dayTimeText}>5:47</Text>
                        </View>
                        <View style={styles.sunSetBlock}>
                            <Text style={styles.dayTimeLabel}>Закат</Text>
                            <Text style={styles.dayTimeText}>20:37</Text>
                        </View>
                        <View style={styles.rainBlock}>
                            <Text style={styles.dayTimeLabel} ellipsizeMode="middle" numberOfLines={1}>Вероятность дождя</Text>
                            <Text style={styles.dayTimeText}>10%</Text>
                        </View>
                        <View style={styles.humidityBlock}>
                            <Text style={styles.dayTimeLabel}>Влажность</Text>
                            <Text style={styles.dayTimeText}>45%</Text>
                        </View>
                    </View>

                    <View style={styles.dayTimeBlock}>
                        <View style={styles.sunRiseBlock}>
                            <Text style={styles.dayTimeLabel}>Ветер</Text>
                            <Text style={styles.dayTimeText}  ellipsizeMode="middle" numberOfLines={1}>ю/в 10 м/с</Text>
                        </View>
                        <View style={styles.sunSetBlock}>
                            <Text style={styles.dayTimeLabel}>Осадки</Text>
                            <Text style={styles.dayTimeText}>0,0 см</Text>
                        </View>
                        <View style={styles.rainBlock}>
                            <Text style={styles.dayTimeLabel}>Давление</Text>
                            <Text style={styles.dayTimeText}>767 мм</Text>
                        </View>
                        <View style={styles.humidityBlock}>
                            <Text style={styles.dayTimeLabel}>Видимость</Text>
                            <Text style={styles.dayTimeText}>9.7 км</Text>
                        </View>
                    </View>
                </View>
    }
}

export default CityInfo;

