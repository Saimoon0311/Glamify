import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import InputBox from '@/Components/InputBox';
import {Touchable} from '@/Components/Touchable';
import {Colors} from '@/Theme/Variables';
import SafeAreaWraper from '@/Components/SafeAreaView';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import {camera} from '@/Assets/Images';
import useFeedback from './useFeedback';
import styles from './styles';

const {width} = Dimensions.get('window');

const Feedback = ({navigation, route}) => {
  const {
    rating,
    errors,
    control,
    onSubmit,
    setRating,
    backHandler,
    handleSubmit,
    launchImageLibrarys,
  } = useFeedback({
    navigation,
    route,
  });

  return (
    <SafeAreaWraper>
      <KeyBoardWraper>
        <View style={styles.container}>
          <Text style={styles.heading}>What is you rate?</Text>
          <View
            style={{justifyContent: 'center', marginTop: 20, marginBottom: 30}}>
            <StarRating
              rating={rating}
              maxStars={5}
              starSize={width * 0.09}
              style={{
                width: width * 0.9,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              starStyle={{
                marginLeft: width * 0.025,
                marginRight: width * 0.025,
              }}
              onChange={setRating}
              color={Colors.black}
              enableHalfStar={true}
              enableSwiping={true}
            />
          </View>
          <Text style={styles.heading}>
            Please share your opinion about the service
          </Text>
          <View style={{marginTop: 15}}>
            <InputBox
              {...{
                name: 'feedback',
                errors,
                control,
                isRequired: true,
                keyboardType: 'default',
                placeholder: 'Write a Review',
              }}
            />
          </View>
          <View style={{marginVertical: 20}}>
            <Touchable
              style={styles.box}
              Opacity={0.7}
              onPress={launchImageLibrarys}>
              <Image source={camera} />
              <Text style={styles.buttonText}>Add your photos</Text>
            </Touchable>
          </View>
          <View style={styles.buttonCard}>
            <Touchable
              Opacity={0.7}
              style={styles.submitButton}
              // onPress={backHandler}
              onPress={handleSubmit(onSubmit)}>
              <Text style={[styles.heading, {color: Colors.white}]}>
                Send Feedback
              </Text>
            </Touchable>
          </View>
        </View>
      </KeyBoardWraper>
    </SafeAreaWraper>
  );
};

export default Feedback;
