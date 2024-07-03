import React, {useCallback} from 'react';
import ProgressBar from 'react-native-progress/Bar';
import {View, Text, FlatList, Image} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';
import Timings from './Timings';
import SafeAreaWraper from '@/Components/SafeAreaView';
import {backButton} from '@/Assets/Images';
import UseAvailableSlots from './UseAvailableSlots';

const AvailableSlots = ({navigation, route}) => {
  const {params} = route;
  const {loading, locationRoute, summaryRoute, availabilitySlotsHandler} =
    UseAvailableSlots({
      navigation,
      params,
    });

  const renderItem = useCallback(
    ({item, index}) => <Timings {...{item, index, summaryRoute}} />,
    [],
  );

  return (
    <SafeAreaWraper>
      {/* Timer */}

      {loading ? (
        <View>
          <Text
            style={{
              fontSize: FontSize.regular,
              color: '#000',
              fontWeight: '600',
              alignSelf: 'center',
              padding: 10,
              fontFamily: FontFamily.semiBold,
            }}>
            Checking Availability
          </Text>
          <ProgressBar
            width={null}
            useNativeDriver
            animated
            borderColor="red"
            borderRadius={0}
            borderWidth={0}
            color="#231F20"
            indeterminate
            animationType="decay"
            indeterminateAnimationDuration={2000}
            unfilledColor="rgba(0,0,0,.5)"
            animationConfig={{bounciness: 10}}
          />
          <Text
            style={{
              fontSize: FontSize.medium,
              color: '#000',
              fontWeight: '600',
              alignSelf: 'center',
              paddingTop: 20,
              fontFamily: FontFamily.semiBold,
            }}>
            Finding Stylist
          </Text>
          <Text
            style={{
              fontSize: FontSize.small,
              color: '#000',
              fontWeight: '600',
              alignSelf: 'center',
              fontFamily: FontFamily.regular,
            }}>
            This can be take seconds
          </Text>
        </View>
      ) : (
        <View>
          <View style={styles.header}>
            <Touchable Opacity={0.7} onPress={availabilitySlotsHandler}>
              <Image source={backButton} style={styles.backButton} />
            </Touchable>
            <View>
              <Text style={styles.heading}>Time Slot Not Available</Text>
              <Text style={styles.subHeading}>
                You can choose from suggestion below.
              </Text>
            </View>
            <Image
              source={backButton}
              style={[styles.backButton, {tintColor: Colors.transparent}]}
            />
          </View>
          {/* <View style={styles.container}>
            <FlatList
              data={slots}
              contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: Colors.white,
              }}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              // renderItem={({item, index}) => {
              //   return (
              //     <View key={index} style={styles.listSpace}>
              //       <Text style={styles.title}>{item.name}</Text>
              //       <View style={styles.listView}>
              //         {item.times.map((items, el) => (
              //           <Touchable
              //             onPress={() => summaryRoute(items)}
              //             key={el}
              //             style={[
              //               styles.listStyle,
              //               {marginRight: (el + 1) % 3 === 0 ? 0 : 10,
              //             }]}>
              //             <Text style={styles.listText}>{items.start}</Text>
              //           </Touchable>
              //         ))}
              //       </View>
              //     </View>
              //   );
              // }}
              // ListFooterComponent={ListFooterComponent}
            />
          </View> */}
        </View>
      )}

      <View style={styles.footer}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>— or —</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Touchable
            onPress={locationRoute}
            style={styles.btnStyle}
            Opacity={0.8}>
            <Text style={styles.btnTitle}>Choose Different Location</Text>
          </Touchable>
        </View>
      </View>
    </SafeAreaWraper>
  );
};

export default AvailableSlots;
