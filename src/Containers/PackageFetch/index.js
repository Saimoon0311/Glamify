import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors, FontSize, modalStyles} from '@/Theme/Variables';
import ModalOverlay from '@/Components/ModalOverlay';
import usePackageFetch from './usePackageFetch';
import {calender, clock, cross, loader} from '@/Assets/Images';
import styles from './styles';

const Card = ({data}) => {
  // console.log('first', data);
  const formatDate = new Date(data?.date);
  const add_ons = ['Outdoor Option', 'Hair Accessories', 'Bang Trim'];
  return (
    <View>
      <View style={styles.cardMainContainer}>
        <View style={styles.headerContainer}>
          <View style={{width: '80%'}}>
            <Text numberOfLines={1} style={styles.headerTitle}>
              {data?.service?.title}
            </Text>
            <View style={styles.row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={calender} style={styles.icon} />
                <Text numberOfLines={1} style={styles.headerDate}>
                  {formatDate.toLocaleDateString('en-US')}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 12.5,
                }}>
                <Image source={clock} style={styles.icon} />
                <Text numberOfLines={1} style={styles.time}>
                  {formatDate.toLocaleTimeString('en-US')}
                </Text>
              </View>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.price}>
            ${parseFloat(data?.service?.price).toFixed(2)}
          </Text>
        </View>
        {/* Badge Contenet */}
        <View style={styles.badgeMainContainer}>
          <Text numberOfLines={1} style={styles.addOnBadgeHeading}>
            Add -ons
          </Text>
          <View style={styles.badgeWrap}>
            {add_ons?.slice(0, 6).map((add, ind) => (
              <View
                style={[
                  styles.addOnBadge,
                  {marginLeft: ind % 3 == 0 || !ind ? 0 : 10},
                ]}
                key={ind}>
                <Text numberOfLines={1} style={styles.addOnBadgeText}>
                  {add}
                </Text>
              </View>
            ))}
            {!add_ons.length && (
              <Text style={styles.addOnBadgeText}>No adds on added</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const PackageFetch = ({navigation: {goBack}, route}) => {
  // console.log('first', route.params);
  return (
    <ModalOverlay onBack={goBack} style={modalStyles.locationScreen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
            <Image source={cross} style={styles.cross} />
          </TouchableOpacity>
          <Text style={styles.heading}>Service Status</Text>
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
        <Card data={route.params} />
        <View style={styles.line} />
        <View style={styles.subContainer}>
          <Image source={loader} />
          <View style={styles.search}>
            <Text style={styles.text}>Searching for location</Text>
          </View>
        </View>
      </View>
    </ModalOverlay>
  );
};
export default React.memo(PackageFetch);
