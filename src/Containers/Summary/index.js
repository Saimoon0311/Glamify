import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {hint, clock, right_arrow} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';
import UseSummary from './UseSummary';
import {StripeProvider} from '@stripe/stripe-react-native';
const activeopacity = 0.7;

const GstText = ({text, price}) => (
  <View style={styles.gstTextContainer}>
    <Text style={styles.gstText}>{text} </Text>
    <Text style={styles.gstPrice}>${price}</Text>
  </View>
);

const Summary = ({navigation, route}) => {
  const {params} = route;
  // console.log('Summary', params);
  const {paymentRoute, openPaymentSheet} = UseSummary({
    navigation,
    params,
  });

  const subTotal = params?.totalPrice;
  const priceTax = params?.totalPrice * 0.045;
  const gratuity = params?.totalPrice * 0.2;
  const Total = subTotal + priceTax + gratuity;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StripeProvider
        publishableKey={
          'pk_test_51Iw6BGDjK3I8iT1C8OpxJS1NMmfrawYMrEyCImc6vfp6c0ZLCDE2XyJntKNVmqlT1xcunnPftLIVlHyql3AZiz4I00ttM70Gvr'
        }>
        <View style={styles.container}>
          <View style={styles.timeContainer}>
            <Text style={styles.date}>
              Saturday, 22 January - {params?.start.replace('0:00', '0')}
            </Text>
            <View style={styles.minutesContainer}>
              <Image source={clock} style={styles.clockImage} />
              <Text style={styles.minutes}>{params?.time} min</Text>
            </View>
          </View>
          {/* Credit container */}
          <View style={styles.subContainer}>
            <View style={styles.serviceHeadingContainer}>
              <Text style={styles.serviceHeading}>{params?.title}</Text>
              <Text style={styles.servicePrice}>${subTotal.toFixed(2)}</Text>
            </View>
            {/* GST Container */}
            <View style={styles.gstContainer}>
              <GstText text="Subtotal" price={subTotal.toFixed(2)} />
              <GstText text="Tax (4.5%)" price={priceTax.toFixed(2)} />
              <GstText text="Gratuity (20%)" price={gratuity.toFixed(2)} />
              <View style={styles.gstContainer}>
                <Text style={[styles.gstPrice, {marginBottom: 10}]}>
                  Available Credits
                </Text>
                <View style={styles.creditsContainer}>
                  <Text style={styles.creditText}>170</Text>
                  <Touchable
                    Opacity={activeopacity}
                    style={styles.useCreditBtn}>
                    <Text style={styles.useCreditBtnTitle}>Use Credits</Text>
                  </Touchable>
                </View>
              </View>
            </View>
          </View>
          {/* Total Container */}
          <View style={styles.totalContainer}>
            <View style={styles.totalContentContainer}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}>${Total.toFixed(2)}</Text>
            </View>
          </View>
          {/* Card Picker Container */}
          <View style={styles.cardPickerContainer}>
            <View>
              <Text style={[styles.gstPrice, {marginBottom: 10}]}>
                Add Payment Method
              </Text>
              <Touchable
                Opacity={activeopacity}
                onPress={paymentRoute}
                style={[
                  styles.creditsContainer,
                  {justifyContent: 'flex-start'},
                ]}>
                <Image
                  source={hint}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                <Text>
                  {params?.last4
                    ? `****  ****  ****  ${params?.last4}`
                    : 'Select If Any'}
                </Text>
              </Touchable>
              <Touchable
                Opacity={activeopacity}
                style={styles.privacyContainer}>
                <Text style={[styles.gstPrice, {marginBottom: 0}]}>
                  Metglam Privacy & Policy
                </Text>
                <Image source={right_arrow} style={styles.privacyArrowImage} />
              </Touchable>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <Touchable
              onPress={openPaymentSheet}
              Opacity={activeopacity}
              style={styles.btn}>
              <Text style={styles.btnTitle}>Book An Appointment</Text>
            </Touchable>
          </View>
        </View>
      </StripeProvider>
    </ScrollView>
  );
};

export default Summary;
