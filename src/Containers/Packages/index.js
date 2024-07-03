import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {packkagesData} from '@/Config/localData';
import {Colors} from '@/Theme/Variables';
import PackageCard from '@/Components/PackageCard';

const Packages = () => {
  const renderItem = useCallback(({item}) => <PackageCard {...{item}} />, []);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <FlatList
        data={packkagesData}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{marginVertical: 10}} />}
        contentContainerStyle={{flexGrow: 1, padding: 20}}
      />
    </View>
  );
};

export default Packages;
