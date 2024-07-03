import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import {Touchable} from '@/Components/Touchable';
import ControlInput from '@/Components/ControlInput';
import styles from './styles';
import {back, userImage} from '@/Assets/Images';
import useReduxStore from '@/Hooks/useReduxStore';
import useFormHook from '@/Hooks/useForm';
import Schemas from '@/Utils/Validation';
import UseProfiles from './UseProfiles';
import * as ImagePicker from 'react-native-image-picker';

const Profile = ({navigation}) => {
  const {
    user,
    errors,
    control,
    image,
    launchImageLibrarys,
    handleSubmit,
    onSubmit,
    profileHandler,
  } = UseProfiles({navigation});
  // console.log('image', image);

  return (
    <SafeAreaWraper>
      <KeyBoardWraper>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Touchable
              Opacity={0.7}
              onPress={profileHandler}
              style={styles.backImg}>
              <Image source={back} width={null} height={null} />
            </Touchable>
            <Touchable Opacity={0.7} onPress={launchImageLibrarys}>
              <Image
                source={{uri: image?.uri || user?.profile_photo}}
                style={styles.image}
              />
              {/* <Image source={{uri: user?.profile_photo}} style={styles.image} /> */}
            </Touchable>
            <Image source={back} style={styles.emptyImage} />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>{user?.name}</Text>
              <Touchable onPress={() => {}}>
                <Text style={styles.subHeading}>Edit Profile</Text>
              </Touchable>
            </View>
            <ControlInput
              {...{
                name: 'name',
                label: 'Full Name',
                placeholder: 'Username',
                control,
                errors,
                defaultValue: user?.name,
                isRequired: true,
              }}
            />
            <ControlInput
              {...{
                name: 'phone',
                label: 'Contact number',
                placeholder: 'Phone',
                control,
                errors,
                type: 'phone',
                defaultValue: user?.phone,
                isRequired: true,
              }}
            />
          </View>
          <View style={styles.button}>
            <Touchable
              Opacity={0.8}
              onPress={handleSubmit(onSubmit)}
              style={styles.btnStyle}>
              <Text style={styles.btnTitle}>Save</Text>
            </Touchable>
          </View>
        </View>
      </KeyBoardWraper>
    </SafeAreaWraper>
  );
};

export default Profile;
