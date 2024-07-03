import React, {useCallback} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import {roundplus} from '@/Assets/Images';
import DebitCard from './DebitCard';
import {Touchable} from '@/Components/Touchable';
import UsePayment from './UsePayment';
import styles from './styles';

const Payment = ({navigation, route}) => {
  const {paymentCards, cardRoute, cardHandler, chooseCard} = UsePayment({
    navigation,
    params: route.params,
  });

  const renderItem = useCallback(
    ({item, index}) => (
      <DebitCard {...{item, index, cardHandler, chooseCard}} />
    ),
    [],
  );

  console.log(route.params);

  return (
    <SafeAreaWraper>
      <View style={styles.mainContainer}>
        <View style={styles.headerTextBox}>
          <Text style={styles.headerText}>Credit / Debit card</Text>
        </View>
        <FlatList
          data={paymentCards}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 60,
          }}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.plusCard}>
        <Touchable Opacity={0.7} style={styles.plus} onPress={cardRoute}>
          <Image source={roundplus} style={styles.photo} />
        </Touchable>
      </View>
    </SafeAreaWraper>
  );
};

export default Payment;
