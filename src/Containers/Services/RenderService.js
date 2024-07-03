import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {defImage} from '@/Assets/Images';
import {baseURL} from '@/Config/Constants';
import {Touchable} from '@/Components/Touchable';
import {styles} from './stylesheet';
import {Colors, FontSize} from '@/Theme/Variables';
import FastImage from 'react-native-fast-image';

const RenderService = ({onPressContainer, item}) => {
  // console.log('services', item.services);
  const [defaultImage, setDefaultImage] = useState(false);
  const icon = `${baseURL.replace('api', '')}${item.image}`;

  return (
    <View
      style={{
        width: '50%',
        height: FontSize.height * 0.25,
        backgroundColor: Colors.white,
      }}>
      <Touchable Opacity={0.7} onPress={() => onPressContainer(item)}>
        <FastImage
          source={{
            uri: icon,
            priority: FastImage.priority.high,
          }}
          style={{width: '100%', height: '100%'}}
        />
        <View style={{position: 'absolute', bottom: 15, left: 17.5}}>
          <Text style={styles.headerHeading}>{item.title}</Text>
        </View>
        {/* <ImageBackground
          // onLoadStart={() => setDefaultImage(true)}
          // onLoad={() => setDefaultImage(true)}
          onError={() => {
            setDefaultImage(true);
          }}
          onLoadEnd={() => {
            setDefaultImage(true);
          }}
          // onError={() => setError(false)}
          resizeMode="stretch"
          style={{width: '100%', height: '100%', backgroundColor: Colors.black}}
          // source={facials}
          source={icon}>
          <View style={{position: 'absolute', bottom: 15, left: 17.5}}>
            <Text style={styles.headerHeading}>{item.title}</Text>
          </View>
        </ImageBackground> */}
      </Touchable>
    </View>
  );
};
export default RenderService;
