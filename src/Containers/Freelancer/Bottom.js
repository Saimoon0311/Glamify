import React from 'react';
import {Text, Image, View} from 'react-native';
import {userImage} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';
import {baseURL} from '@/Config/Constants';
import styles from './styles';

const Bottom = ({data, navChat}) => {
  const URI = {
    uri: `${baseURL.replace('/api', '')}${data?.provider?.profile_photo}`,
  };
  return (
    <View style={styles.subContainer}>
      <Image
        defaultSource={userImage}
        source={!data?.provider?.profile_photo ? userImage : URI}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.heading}>
          {!data?.provider?.name ? 'Gregory Hayes' : data?.provider?.name}
        </Text>
        <Text style={styles.subHeading}>Cleansing Speacialist</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.heading}>Working time</Text>
        <Text style={styles.subHeading}>Mon - Sat (08:30 AM - 09:00 PM)</Text>
      </View>
      <Touchable
        onPress={() => navChat(data)}
        Opacity={0.7}
        style={styles.btnStyle}>
        <Text style={styles.btnTitle}>Chat</Text>
      </Touchable>
    </View>
  );
};

export default Bottom;
