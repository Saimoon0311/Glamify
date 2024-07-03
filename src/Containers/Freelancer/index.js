import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import useFreelancer from './useFreelancer';
import styles from './styles';
import Header from './Header';
import RatingCard from './RatingCard';
import Bottom from './Bottom';
import Footer from './Footer';

const Freelancer = ({navigation, route}) => {
  const {data, goBack, navChat} = useFreelancer({navigation, route});

  return (
    <SafeAreaWraper>
      <Header {...{goBack}} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Card */}
          <View style={{flex: 1}}>
            <Bottom {...{data, navChat}} />
            {/* Rating */}
            <View style={styles.footer}>
              <View style={styles.rowCenter}>
                <Text style={styles.rating}>4.3</Text>
                <Text style={styles.ratingCount}>24 ratings</Text>
              </View>
              <View style={styles.rowCenter}>
                <RatingCard {...{rating: 5, progress: 1, count: 12}} />
                <RatingCard {...{rating: 4, progress: 0.4, count: 6}} />
                <RatingCard {...{rating: 3, progress: 0.3, count: 4}} />
                <RatingCard {...{rating: 2, progress: 0.2, count: 2}} />
                <RatingCard {...{rating: 1, progress: 0, count: 0}} />
              </View>
            </View>
            {/* Reviews */}
            <Footer />
          </View>
        </ScrollView>
      </View>
    </SafeAreaWraper>
  );
};

export default Freelancer;
