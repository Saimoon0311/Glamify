import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Colors} from '@/Theme/Variables';
import SafeAreaWraper from '@/Components/SafeAreaView';
import AppointmentCard from '@/Components/AppointmentCard';
import ItemSeperator from '@/Components/ItemSeperator';
import AppointmentButton from '@/Components/AppointmentButton';
import useScheduled from './useScheduled';

const Scheduled = ({navigation}) => {
  const {
    bookings,
    cancel,
    appointmentHandler,
    cancelHandler,
    onRefresh,
    onSelect,
  } = useScheduled({navigation});

  const renderItem = useCallback(
    ({item}) => (
      <AppointmentCard
        {...{item, onSelect, cancel, appointmentHandler, cancelHandler}}
      />
    ),
    [bookings],
  );

  return (
    <SafeAreaWraper>
      <View style={{paddingBottom: 60}}>
        <FlatList
          data={bookings}
          refreshing={false}
          onRefresh={onRefresh}
          renderItem={renderItem}
          keyExtractor={item => item?._id}
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

export default React.memo(Scheduled);
