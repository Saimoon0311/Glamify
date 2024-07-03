import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import RenderService from './RenderService';
import SafeAreaWraper from '@/Components/SafeAreaView';

const Services = ({navigation: {navigate}, route}) => {
  const onPressContainer = param => navigate('ServiceContainer', param);
  const renderItem = useCallback(
    ({item, index}) => <RenderService {...{item, index, onPressContainer}} />,
    [],
  );

  return (
    <SafeAreaWraper>
      <FlatList
        numColumns={2}
        data={route.params}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={renderItem}
      />
    </SafeAreaWraper>
  );
};

export default React.memo(Services);
