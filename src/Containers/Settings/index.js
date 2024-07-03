import React from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import SafeAreaWraper from '@/Components/SafeAreaView';
import * as images from '@/Assets/Images';
import styles from './styles';
import ProfileListItem from './ProfileListItem';
import UseSettings from './UseSettings';
import ProfileDeleteList from './ProfileDeleteList';

const Setting = ({navigation}) => {
  const {
    logOutHandler,
    deleteAccountHandler,
    profileHandler,
    bookingHandler,
    walletHandler,
  } = UseSettings({
    navigation,
  });

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaWraper>
      <ScrollView
        contentContainerStyle={styles.mainScroll}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.usermainContainer}>
            <Text style={styles.userNameText}>Account</Text>
          </View>
          <View style={styles.profileItemContainer}>
            <ProfileListItem
              src={images.profile}
              src2={images.black_arrow}
              heading="My Profile"
              onPress={profileHandler}
            />
            <ProfileListItem
              src={images.location}
              src2={images.black_arrow}
              heading="Location Address"
              onPress={() => {}}
            />
            <ProfileListItem
              src={images.BookingStack}
              src2={images.black_arrow}
              heading="Booking"
              onPress={bookingHandler}
            />
            <ProfileListItem
              src={images.card}
              src2={images.black_arrow}
              heading="Payment Methods"
              onPress={walletHandler}
            />
            <ProfileListItem
              src={images.contact}
              src2={images.black_arrow}
              heading="Contact Us"
              onPress={() => {}}
            />
            <ProfileListItem
              src={images.help}
              src2={images.black_arrow}
              heading="Helps & FAQs"
              onPress={() => {}}
            />
            <ProfileListItem
              src={images.signout}
              // src2={images.black_arrow}
              heading="Sign Out"
              // onPress={signOut}
              onPress={logOutHandler}
            />
            <ProfileDeleteList
              src={images.deleteUser}
              // src2={images.black_arrow}
              heading="Delete Account"
              // onPress={signOut}
              onPress={() => {
                Alert.alert(
                  'Delete Account',
                  'Are you sure you want to delete your account.',
                  // 'Are you sure you want to delete your account. Once you delete the account you will loose your record and history.',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => {
                        return null;
                      },
                      style: 'cancel',
                    },
                    {
                      text: 'Delete',
                      onPress: deleteAccountHandler,
                      style: 'Confirm',
                    },
                  ],
                  {cancelable: true},
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaWraper>
  );
};

export default Setting;
