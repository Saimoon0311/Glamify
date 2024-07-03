import React from 'react';
import {Text, View, StyleSheet, Image, Platform} from 'react-native';
import {back, backButton} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const Header = ({data, goBack}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Touchable Opacity={0.7} onPress={goBack}>
          <Image
            source={Platform.OS == 'ios' ? back : backButton}
            style={styles.backIcon}
          />
        </Touchable>
        <Text style={styles.headerTitle}>
          {!data?.provider?.name ? 'Gregory Hayes' : data?.provider?.name}
        </Text>
        <Image
          source={Platform.OS == 'ios' ? back : backButton}
          style={[
            styles.backIcon,
            {
              tintColor: Colors.transparent,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.gray,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: Colors.black,
    fontSize: FontSize.medium + 2,
    fontFamily: FontFamily.bold,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
