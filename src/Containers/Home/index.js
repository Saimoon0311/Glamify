import React, {useCallback} from 'react';
import {View, ScrollView, Dimensions, Image, Text} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import ServiceItem from '@/Components/ServiceItem';
import AppointmentCard from '@/Components/AppointmentCard';
import ServiceCard from '@/Components/ServiceCard';
import OfferCard from '@/Components/OfferCard';
import {appointments, offerData, servicesData} from '@/Config/localData';
import HomeScrollWrapper from '@/Components/HomeScrollWrapper';
import FloatingButton from '@/Components/FloatingButton';
import {Colors, FontSize} from '@/Theme/Variables';
import {glamifi} from '@/Assets/Images';
import {Modalize} from 'react-native-modalize';
import LocationModal from '@/Components/LocationModal';
import useHome from './useHome';
import styles from './styles';
import {Touchable} from '@/Components/Touchable';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const {
    categories,
    assignedBookings,
    locationModalRef,
    locationCheck,
    enableLocation,
    onPressContainer,
    openLocationSetting,
  } = useHome({
    navigation,
  });

  const renderOffered = useCallback(
    ({offerData}) => (
      <HomeScrollWrapper>
        {offerData.map((item, ind) => (
          <OfferCard
            key={ind}
            width={200}
            height={250}
            src={item.cover}
            price={item.price}
            heading={item.name}
            margin={ind ? 25 : 0}
          />
        ))}
      </HomeScrollWrapper>
    ),
    [offerData],
  );

  const renderAppointments = useCallback(
    ({assignedBookings}) => (
      <HomeScrollWrapper>
        {assignedBookings.slice(0, 6).map((item, ind) => (
          <AppointmentCard
            key={ind}
            item={item}
            marginLeft={ind ? 20 : 1}
            booked={true}
          />
        ))}
      </HomeScrollWrapper>
    ),
    [appointments],
  );
  const renderServices = useCallback(
    ({categories}) => (
      <HomeScrollWrapper>
        {categories.map((item, ind) => (
          <ServiceCard
            key={ind}
            item={item}
            src={item.image}
            title={item.title}
            margin={ind ? 20 : 0}
            onPressContainer={onPressContainer}
          />
        ))}
      </HomeScrollWrapper>
    ),
    [categories],
  );
  return (
    <SafeAreaWraper>
      <ScrollView
        style={{flex: 1}}
        bounces={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        nestedScrollEnabled>
        <View
          style={{
            backgroundColor: Colors.black,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 40,
          }}>
          <Image
            source={glamifi}
            style={{
              width: width * 0.5,
              height: height * 0.05,
              resizeMode: 'contain',
            }}
          />
        </View>
        {/* <Slide /> */}
        <View style={styles.mainSubContainer}>
          {locationCheck && (
            <View style={{alignItems: 'center', paddingBottom: 20}}>
              <Text style={styles.para}>
                Please Enable Location from the settings to get Services
              </Text>
              <Touchable
                style={styles.settingsButton}
                Opacity={0.7}
                onPress={openLocationSetting}>
                <Text style={styles.text}>Enable Location</Text>
              </Touchable>
            </View>
          )}
          {categories?.length ? (
            <>
              <ServiceItem service="Choose Services" type="View All" />
              {renderServices({categories})}
            </>
          ) : null}
          {assignedBookings.length ? (
            <>
              <ServiceItem service="Upcoming Appointments" type="View All" />
              {renderAppointments({assignedBookings})}
            </>
          ) : null}
          <ServiceItem service="Offered Packages" type="View All" />
          {renderOffered({offerData})}
        </View>
      </ScrollView>
      <Modalize
        modalStyle={{
          marginBottom: FontSize.height * 0.225,
          marginHorizontal: 50,
          borderRadius: 10,
        }}
        withHandle={false}
        closeOnOverlayTap
        modalHeight={FontSize.height * 0.4}
        ref={locationModalRef}>
        <LocationModal onPress={enableLocation} />
      </Modalize>
      <FloatingButton title="Book An Appointment" />
    </SafeAreaWraper>
  );
};

export default Home;
