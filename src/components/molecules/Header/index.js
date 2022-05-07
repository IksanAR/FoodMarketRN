import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICBack} from '../../../assets/Icon';

const Header = ({title, subTitle, onBcak}) => {
  return (
    <View style={styles.container}>
      {onBcak && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.back}>
            <ICBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  back: {
    marginRight: 16,
    padding: 16,
    marginLeft: -10,
  },
});
