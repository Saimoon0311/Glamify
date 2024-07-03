import React from 'react';
import {ImageBackground, View, Image, ScrollView, Text} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import {wallet_bg, download, plus} from '@/Assets/Images';
import WalletListItem from '@/Components/WalletListItem';
import styles from './styles';

const Wallet = () => {
  return (
    <SafeAreaWraper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image
              source={{
                uri: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
              }}
              style={styles.cardImg}
              resizeMode="cover"
            />
            <Text style={styles.cardTxt}>Jennifer J</Text>
          </View>
          <ImageBackground
            source={wallet_bg}
            style={styles.bgImage}
            resizeMode="stretch">
            <Text style={styles.price}>2,000</Text>
          </ImageBackground>
          <View style={styles.card}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={download}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.heading}>Rewards</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image source={plus} style={styles.icon} resizeMode="contain" />
              <Text style={styles.heading}>Points</Text>
            </View>
          </View>
          <WalletListItem heading="Sew-In Removal" desc="Buy For 299 Points" />
          <WalletListItem
            heading="Quickweave Removal"
            desc="Buy For 599 Points"
          />
          <WalletListItem
            heading="Full Sew In w/ bangs"
            desc="Buy For 899 Points"
          />
          <WalletListItem heading="Bob Cut" desc="Buy For 999 Points" />
        </View>
      </ScrollView>
    </SafeAreaWraper>
  );
};

export default Wallet;
