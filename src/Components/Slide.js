import React, {useState, useRef, useCallback} from 'react';
import {Dimensions, View, StyleSheet, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import * as image from '@/Assets/Images';
const {width} = Dimensions.get('window');
const images = ['slide_three', 'slide_one', 'slide_two'];

const Slide = () => {
  const [index, setIndex] = useState(1);
  const isCarousel = useRef(null);

  const _renderItem = useCallback(
    ({item, index}) => (
      <Image
        source={image[item]}
        alt="Slides"
        style={styles.image}
        resizeMode="cover"
      />
    ),
    [],
  );

  return (
    <View style={styles.mainSlideContainer}>
      <Carousel
        data={images}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        firstItem={1}
        autoplayDelay={2000}
        // loop={true}
        // autoplay={true}
        useScrollView={true}
        ref={isCarousel}
        onSnapToItem={setIndex}
        // contentContainerStyle={}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.dot}
        activeOpacity={1}
        inactiveDotOpacity={0.9}
        inactiveDotScale={0.8}
        tappableDots={true}
        inactiveDotColor="#fff"
        dotColor="#1A1A1A"
        containerStyle={styles.dotContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  dotContainer: {
    position: 'absolute',
    width: '100%',
    bottom: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  mainSlideContainer: {height: 185, width: '100%'},
});
export default Slide;
