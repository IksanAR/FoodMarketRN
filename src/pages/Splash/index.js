import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ILLogo />
      <View style={styles.gap} />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  gap: {
    height: 38,
  },
});
