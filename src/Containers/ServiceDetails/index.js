import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Content from './Content';
import Header from './Header';
import styles from './stylesheets';
import useService from './useService';

const Lines = 1;
const ServiceDetails = ({route, navigation}) => {
  const {params} = route;
  const {
    addsOn,
    totalPrice,
    count,
    checkCount,
    incrementCheckCount,
    decrementCheckCount,
    onSubmit,
    updateAddsOn,
    incrementCount,
    decrementCount,
  } = useService({navigation, params});
  // console.log('ServiceDetails', params);

  return (
    <View style={styles.mainContainer}>
      {/* Header start from here */}
      <Header {...{params, decrementCount, incrementCount, Lines, count}} />
      {/* Content start from here */}
      <Content
        {...{
          addsOn,
          updateAddsOn,
          count,
          checkCount,
          incrementCheckCount,
          decrementCheckCount,
        }}
      />
      {/* Footer start from here */}
      <View style={styles.footer}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.footerSubTotal}>Subtotal : ${totalPrice}</Text>
          <Text style={styles.time} numberOfLines={Lines}>
            {params?.time} min
          </Text>
        </View>
        <TouchableOpacity
          onPress={onSubmit}
          activeOpacity={0.8}
          style={styles.submitBtn}>
          <Text style={styles.submitTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(ServiceDetails);
