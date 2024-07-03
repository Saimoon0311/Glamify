import {right_arrow} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';
import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {styles} from './stylesheet';

const Content = ({item, setExpandedIndex, onPressService}) => (
  <ImageBackground
    source={{uri: 'https://i.ibb.co/pyyh7Kx/Group-34631.png'}}
    imageStyle={styles.headerImage}
    style={styles.contentContainer}>
    <View style={styles.contentSubContainer}>
      <Touchable
        style={styles.contentHeadingContainer}
        Opacity={0.7}
        onPress={() => setExpandedIndex('')}>
        <Text style={styles.contentHeading}>{item.title}</Text>
        <Image
          source={right_arrow}
          style={[styles.arrowImage, {transform: [{rotate: '90deg'}]}]}
        />
      </Touchable>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={styles.contentScroll}>
        {item.data.map((value, index) => (
          <Touchable
            Opacity={0.8}
            key={`index ${index}`}
            onPress={() => onPressService({...item, data: item.data[index]})}
            style={styles.contentTextContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textHeading}>{value.heading}</Text>
              <Text style={styles.timeText}>{value.time}</Text>
              <Text style={styles.textHeading}>${value.price}</Text>
            </View>
            <Text style={styles.contentDesc} numberOfLines={3}>
              {value.desc}
            </Text>
          </Touchable>
        ))}
      </ScrollView>
    </View>
  </ImageBackground>
);

export default Content;
