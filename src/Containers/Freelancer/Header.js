import React from 'react';
import {Text, View, Image, Platform} from 'react-native';
import {back, backButton} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';
import {Colors} from '@/Theme/Variables';
import styles from './styles';

const Header = ({goBack}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Touchable Opacity={0.7} onPress={goBack}>
          <Image
            source={Platform.OS == 'ios' ? back : backButton}
            style={styles.backIcon}
          />
        </Touchable>
        <Text style={styles.headerTitle}>Review and Rating</Text>
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
