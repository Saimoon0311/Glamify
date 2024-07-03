import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Colors} from '@/Theme/Variables';
import SafeAreaWraper from '@/Components/SafeAreaView';
// import AppointmentCard from '@/Components/AppointmentCard';
import ItemSeperator from '@/Components/ItemSeperator';
import useHistory from './useHistory';
import AppointmentButton from '@/Components/AppointmentButton';
import HistoryCard from '@/Components/HistoryCard';

const History = ({navigation}) => {
  const isConfirmed = true;

  const {bookingHistory, onRefresh, feedbackHandler} = useHistory({
    navigation,
  });
  const renderItem = useCallback(
    ({item, location}) => (
      <HistoryCard {...{item, location, feedbackHandler, isConfirmed}} />
    ),
    [],
  );

  return (
    <SafeAreaWraper>
      <View style={{paddingBottom: 60}}>
        <FlatList
          // data={history}
          refreshing={false}
          data={bookingHistory}
          onRefresh={onRefresh}
          renderItem={renderItem}
          keyExtractor={(x, i) => i.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeperator}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: Colors.white,
            padding: 20,
          }}
        />
      </View>
      <AppointmentButton title="Add New Appointment" />
    </SafeAreaWraper>
  );
};

// export default History;
export default React.memo(History);
