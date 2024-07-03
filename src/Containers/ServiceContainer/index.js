import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import ServiceList from '@/Components/ServiceList';

const ServiceContainer = ({navigation: {navigate}, route}) => {
  const onPressService = param => navigate('ServiceDetails', param);
  const renderItem = useCallback(
    ({item, index}) => <ServiceList {...{item, index, onPressService}} />,
    [],
  );
  // console.log('ServiceContainer', route.params);

  return (
    <SafeAreaWraper>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={route.params.services}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaWraper>
  );
};

export default ServiceContainer;
