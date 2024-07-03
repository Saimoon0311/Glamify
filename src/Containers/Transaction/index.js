import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import TransactionCard from '@/Components/TransactionCard';
import ItemSeperator from '@/Components/ItemSeperator';
import useTransaction from './useTransaction';

const Transaction = ({navigation}) => {
  const {transactionHistory, onRefresh} = useTransaction({navigation});

  const renderItem = useCallback(
    ({item}) => (
      <TransactionCard
        {...{
          item,
        }}
      />
    ),
    [],
  );

  return (
    <SafeAreaWraper>
      <FlatList
        data={transactionHistory}
        refreshing={false}
        renderItem={renderItem}
        onRefresh={onRefresh}
        contentContainerStyle={{flexGrow: 1, padding: 20}}
        ItemSeparatorComponent={ItemSeperator}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaWraper>
  );
};

export default Transaction;
