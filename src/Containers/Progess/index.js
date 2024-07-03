import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Colors} from '@/Theme/Variables';
import SafeAreaWraper from '@/Components/SafeAreaView';
import AppointmentCard from '@/Components/AppointmentCard';
import ItemSeperator from '@/Components/ItemSeperator';
import AppointmentButton from '@/Components/AppointmentButton';
import useProgess from './useProgess';

const Progess = ({navigation}) => {
  const {
    assignedBookings,
    books,
    booked,
    cancel,
    appointmentHandler,
    cancelHandler,
    onRefresh,
  } = useProgess({
    navigation,
  });
  // console.log('first', assignedBookings);
  // const appointmentHandler = param =>
  //   navigation.navigate('PackageFetch', param);

  const renderItem = useCallback(
    ({item, location}) => (
      <AppointmentCard
        {...{
          item,
          location,
          books,
          booked,
          cancel,
          appointmentHandler,
          cancelHandler,
        }}
      />
    ),
    [],
  );

  return (
    <SafeAreaWraper>
      <View style={{paddingBottom: 60}}>
        <FlatList
          data={assignedBookings}
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

export default React.memo(Progess);
