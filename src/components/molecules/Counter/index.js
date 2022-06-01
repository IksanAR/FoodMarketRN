import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICBtnMin, ICBtnPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ICBtnMin />
      </TouchableOpacity>

      <Text style={styles.text}>14</Text>
      <TouchableOpacity>
        <ICBtnPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    paddingHorizontal: 10,
  },
});
