import {createRef} from 'react';
import {
  initPaymentSheet,
  presentPaymentSheet,
} from '@stripe/stripe-react-native';
import API from '@/Services/API';

const UseSummary = ({navigation, params}) => {
  const paymentRoute = () => navigation.navigate('Payment', params);
  const appointmentModalOpen = () => navigation.push('Thanks');
  // const appointmentModalOpen = () => modalizeRef.current.open();
  const appointmentModalClose = () =>
    navigation.replace('HomeStack', {screen: 'Appointments'});
  // const appointmentModalClose = () => modalizeRef.current.close();
  const bookingRoute = () => {
    appointmentModalClose();
    // navigation.replace('BookingStack');
  };

  const modalizeRef = createRef(null);

  const fetchPaymentSheetParams = async () => {
    try {
      const {
        service_id,
        date,
        timeslot,
        zip,
        addsOnID: addons,
        clients,
      } = params;
      const paymentDetails = {
        service_id,
        date: date,
        timeslot,
        zip,
        addons: addons,
        clients: String(clients),
      };
      console.log(paymentDetails, 'fetchPaymentSheetParams');
      const {data} = await API.post('/user/request-service', paymentDetails);
      console.log(data);
      const {paymentIntent, customer} = data;
      return {paymentIntent, customer};
    } catch (error) {
      console.log(error);
    }
  };

  const openPaymentSheet = async () => {
    try {
      console.log('openPaymentSheet');
      const {paymentIntent, customer} = await fetchPaymentSheetParams();
      if (paymentIntent) {
        await initPaymentSheet({
          customerId: customer,
          paymentIntentClientSecret: paymentIntent,
          merchantDisplayName: 'Glamifi',
        });
        const {error} = await presentPaymentSheet();
        if (error) console.log(`Error code: ${error.code}`, error.message);
        else appointmentModalOpen();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    paymentRoute,
    appointmentModalOpen,
    bookingRoute,
    modalizeRef,
    openPaymentSheet,
    appointmentModalClose,
  };
};

export default UseSummary;
