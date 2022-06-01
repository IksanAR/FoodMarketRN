import {StyleSheet, Text, View} from 'react-native';
import {ICStarOff, ICStarOn} from '../../../assets';

import React from 'react';

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <ICStarOn />
        <ICStarOn />
        <ICStarOn />
        <ICStarOn />
        <ICStarOff />
      </View>
      <Text>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
});
