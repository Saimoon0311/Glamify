import React from 'react';
import {View, Text, Image} from 'react-native';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';

const ProfileDeleteList = ({src, src2, heading, onPress}) => {
  return (
    <Touchable Opacity={0.7} style={styles.listItemContainer} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={src}
            style={styles.listDeleteImage}
            resizeMode="contain"
          />
          <Text style={styles.listDeleteHeading}>{heading}</Text>
        </View>
        <Image
          source={src2}
          style={styles.listItemImage2}
          resizeMode="contain"
        />
      </View>
    </Touchable>
  );
};

export default ProfileDeleteList;
