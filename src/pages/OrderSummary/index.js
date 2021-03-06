import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy6} from '../../assets';

const OrderSummary = () => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBcak={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood image={FoodDummy6} items={14} />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Cherry Healthy}" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue label="Total" Price value="IDR 390.803.000" />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivery to</Text>
        <ItemValue label="Name" value="Angga Risky" />
        <ItemValue label="Phone No." value="0822 0819 9688" />
        <ItemValue label="Address" value="Setra Duta Palima" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>

      <View style={styles.button}>
        <Button text="Checkout Now" />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
});
