import React from 'react';
import {View, Text, Image} from 'react-native';
import {calender, cross} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';
import {Colors} from '@/Theme/Variables';
import {Calendar} from 'react-native-calendars';
import styles from './styles';

const CalenderDate = ({
  date,
  minDate,
  setDate,
  selectTime,
  onClose,
  getSlots,
}) => {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.calHeading}>
          <Touchable Opacity={0.7} onPress={onClose}>
            <Image source={cross} style={styles.backButton} />
          </Touchable>
          <Text style={styles.calText}>Select Date</Text>
          <Image
            source={cross}
            style={[styles.backButton, {tintColor: Colors.transparent}]}
          />
        </View>
        <View style={styles.dateBox}>
          <Image source={calender} style={styles.calButton} />
          <Text style={styles.calText}>{date}</Text>
        </View>
      </View>
      <View>
        <Calendar
          markingType={'custom'}
          enableSwipeMonths={true}
          current={date}
          minDate={minDate}
          onDayPress={({dateString}) => setDate(dateString)}
          style={styles.calendar}
          headerStyle={styles.headerStyles}
          markedDates={{
            [date]: {
              customStyles: styles.customStyles,
            },
          }}
          theme={styles.theme}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.timeContainer}>
          <Text style={styles.timer}>Time</Text>
          <View style={styles.timerCard}>
            <Text style={[styles.timer, {color: Colors.black}]}>
              {selectTime?.start.replace('0:00', '0')}
            </Text>
          </View>
        </View>
        <View style={styles.timerFooter}>
          <View style={{alignItems: 'center'}}>
            <Touchable
              // onPress={locationRoute}
              onPress={getSlots}
              style={[
                styles.btnStyle,
                {
                  backgroundColor: Colors.white,
                },
              ]}
              Opacity={0.8}>
              <Text style={[styles.btnTitle, {color: Colors.black}]}>
                Confirm Date & Time
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(CalenderDate);
