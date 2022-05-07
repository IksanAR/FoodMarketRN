import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text, color = '#FFC700', textColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    padding: 12,
    backgroundColor: color,
    borderRadius: 8,
  }),
  text: color => ({
    fontSize: 14,
    color: color,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  }),
});
