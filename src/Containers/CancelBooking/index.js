import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors, FontSize, modalStyles} from '@/Theme/Variables';
import ModalOverlay from '@/Components/ModalOverlay';
import useCancelBooking from './useCancelBooking';
import {cross, radio, setRadio} from '@/Assets/Images';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {Touchable} from '@/Components/Touchable';
import ControlInput from '@/Components/ControlInput';
import RadioGroup from 'react-native-radio-buttons-group';

const CancelBooking = ({navigation: {goBack, navigate}, route}) => {
  // console.log('first', route.params);
  const {
    radioData,
    cancelReasons,
    checked,
    control,
    errors,
    setChecked,
    onSubmit,
  } = useCancelBooking({navigate, goBack, route});
  return (
    <ModalOverlay onBack={goBack} style={modalStyles.locationScreen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
            <Image source={cross} style={styles.cross} />
          </TouchableOpacity>
          <Text style={styles.heading}>Cancel Booking</Text>
          <Image
            source={cross}
            style={[
              styles.cross,
              {
                tintColor: Colors.transparent,
              },
            ]}
          />
        </View>
        {/* <View style={styles.line} /> */}
        <View style={styles.subContainer}>
          {cancelReasons.length != 0 && (
            <View style={styles.search}>
              <Text style={styles.headerText}>Why you want to cancel</Text>
              <View style={{paddingTop: 20}}>
                <FlatList
                  data={radioData}
                  // data={cancelReasons}
                  keyExtractor={(x, i) => i.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item, index}) => {
                    return (
                      <View key={index}>
                        {checked == item ? (
                          <Touchable Opacity={0.7} style={styles.btn}>
                            <Image style={styles.img} source={setRadio} />
                            <Text style={styles.title}>{item}</Text>
                            <View style={styles.line} />
                          </Touchable>
                        ) : (
                          <Touchable
                            Opacity={0.7}
                            onPress={() => setChecked(item)}
                            style={styles.btn}>
                            <Image style={styles.img} source={radio} />
                            <Text style={styles.title}>{item}</Text>
                            <View style={styles.line} />
                          </Touchable>
                        )}
                      </View>
                    );
                  }}
                />
              </View>
              <View style={{paddingTop: 40}}>
                {checked == 'Other.' && (
                  <ControlInput
                    {...{
                      name: 'reason',
                      label: 'Reason for cancel',
                      placeholder: '',
                      control,
                      errors,
                      textBox: true,
                      radio: true,
                    }}
                  />
                )}
                <View style={styles.button}>
                  <Touchable
                    onPress={onSubmit}
                    // onPress={handleSubmit(onSubmit)}
                    // onPress={onRadioSubmit}
                    // onPress={
                    //   checked == 'Other.'
                    //     ? () => onRadioSubmit
                    //     : handleSubmit(onSubmit)
                    // }
                    Opacity={0.8}
                    style={styles.btnStyle}>
                    <Text style={styles.btnTitle}>Cancel Booking</Text>
                  </Touchable>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </ModalOverlay>
  );
};
export default React.memo(CancelBooking);
