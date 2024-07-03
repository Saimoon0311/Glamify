import React from 'react';
import {View, Text} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import ControlInput from '@/Components/ControlInput';
import UseCard from './UseCard';
import styles from './styles';
import {Touchable} from '@/Components/Touchable';
import {CardField, StripeProvider} from '@stripe/stripe-react-native';
import {Colors} from '@/Theme/Variables';

const AddCard = ({navigation}) => {
  const {
    focus,
    errors,
    control,
    handleSubmit,
    setCard,
    onFocus,
    onBlur,
    // cardHandler,
    AddCardData,
  } = UseCard({
    navigation,
  });

  return (
    <SafeAreaWraper>
      <KeyBoardWraper>
        <StripeProvider
          publishableKey={
            'pk_test_51Iw6BGDjK3I8iT1C8OpxJS1NMmfrawYMrEyCImc6vfp6c0ZLCDE2XyJntKNVmqlT1xcunnPftLIVlHyql3AZiz4I00ttM70Gvr'
          }
          merchantIdentifier="merchant.identifier">
          <View style={styles.bar} />
          <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.cardText}>Add Card</Text>
            </View>
            <View style={styles.inputContainer}>
              <ControlInput
                {...{
                  name: 'name',
                  label: 'Name on Card',
                  placeholder: '',
                  control,
                  errors,
                  isRequired: true,
                }}
              />
              <View style={styles.mainContainer}>
                <Text style={styles.label}>Card Details</Text>
                <CardField
                  postalCodeEnabled={false}
                  placeholders={{
                    number: '4242 4242 4242 4242',
                  }}
                  cardStyle={{
                    ...styles.cardStyle,
                    borderColor: focus ? Colors.black : Colors.border,
                  }}
                  style={styles.Input}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  onCardChange={cardDetails => {
                    // console.log('cardDetails', cardDetails);
                    setCard(cardDetails);
                  }}
                />
              </View>
            </View>
            <View style={styles.button}>
              <Touchable
                onPress={AddCardData}
                // onPress={handleSubmit(cardHandler)}
                Opacity={0.8}
                style={styles.btnStyle}>
                <Text style={styles.btnTitle}>Add Card</Text>
              </Touchable>
            </View>
          </View>
        </StripeProvider>
      </KeyBoardWraper>
    </SafeAreaWraper>
  );
};

export default React.memo(AddCard);
