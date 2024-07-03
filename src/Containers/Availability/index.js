import React, {useCallback} from 'react';
import ProgressBar from 'react-native-progress/Bar';
import {View, Dimensions, Text, FlatList, Image} from 'react-native';
import {Colors} from '@/Theme/Variables';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';
import Timings from './Timings';
import SafeAreaWraper from '@/Components/SafeAreaView';
import {backButton} from '@/Assets/Images';
import UseAvailability from './UseAvailability';
import {Modalize} from 'react-native-modalize';
import CalenderDate from './CalenderDate';

const {height} = Dimensions.get('window');

const Availability = ({navigation, route}) => {
  const {params} = route;
  // console.log('Available', params);

  const {
    date,
    minDate,
    selectTime,
    allSlots,
    loading,
    locationModalRef,
    setDate,
    onRefresh,
    setSelectTime,
    availabilityHandler,
    onOpen,
    onClose,
    getSlots,
    summaryRoute,
  } = UseAvailability({
    navigation,
    params,
  });

  const renderItem = useCallback(
    ({item, index}) => (
      <Timings {...{item, index, selectTime, summaryRoute, setSelectTime}} />
    ),
    [selectTime],
  );

  return (
    <SafeAreaWraper>
      <View style={{flex: 1}}>
        {loading ? (
          <View>
            <Text style={styles.headerText}>Checking Slots</Text>
            <ProgressBar
              width={null}
              useNativeDriver
              animated
              borderColor={Colors.error}
              borderRadius={0}
              borderWidth={0}
              color="#231F20"
              indeterminate
              animationType="decay"
              indeterminateAnimationDuration={2000}
              unfilledColor="rgba(0,0,0,.5)"
              animationConfig={{bounciness: 10}}
            />
            <Text style={styles.midHeading}>Finding Stylist</Text>
            <Text style={styles.bottomText}>This can be take seconds</Text>
          </View>
        ) : (
          <View>
            <View style={styles.header}>
              <Touchable Opacity={0.7} onPress={availabilityHandler}>
                <Image source={backButton} style={styles.backButton} />
              </Touchable>
              <View>
                <Text style={styles.heading}>Please Select The Time Slot</Text>
                <Text style={styles.subHeading}>
                  You can choose from suggestion below.
                </Text>
              </View>
              <Image
                source={backButton}
                style={[styles.backButton, {tintColor: Colors.transparent}]}
              />
            </View>
            <View
              style={[
                styles.container,
                {
                  height: selectTime?._id ? height * 0.8 : height * 0.95,
                  paddingBottom: selectTime?._id ? 0 : height * 0.075,
                },
              ]}>
              <FlatList
                data={allSlots}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1,
                  backgroundColor: Colors.white,
                }}
                refreshing={false}
                onRefresh={onRefresh}
                renderItem={renderItem}
              />
            </View>
          </View>
        )}
        {selectTime?._id && (
          <View style={styles.footer}>
            <View style={{alignItems: 'center'}}>
              <Touchable onPress={onOpen} style={styles.btnStyle} Opacity={0.8}>
                <Text style={styles.btnTitle}>Select Date</Text>
              </Touchable>
            </View>
          </View>
        )}
        <Modalize
          modalStyle={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          withHandle={false}
          modalHeight={height * 0.86}
          ref={locationModalRef}>
          <CalenderDate
            {...{
              date,
              minDate,
              onClose,
              setDate,
              getSlots,
              selectTime,
              service_id: params?.service_id,
              clients: params?.clients,
            }}
          />
        </Modalize>
      </View>
    </SafeAreaWraper>
  );
};

export default React.memo(Availability);
