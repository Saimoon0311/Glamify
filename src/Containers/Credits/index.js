import React from 'react';
import {FlatList} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import WalletCard from '@/Components/WalletCard';
import ItemSeperator from '@/Components/ItemSeperator';
import {credits} from '@/Config/localData';

const Credits = () => {
  return (
    <SafeAreaWraper>
      <FlatList
        data={credits}
        renderItem={WalletCard}
        contentContainerStyle={{flexGrow: 1, padding: 20}}
        ItemSeparatorComponent={ItemSeperator}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaWraper>
  );
};

export default Credits;
