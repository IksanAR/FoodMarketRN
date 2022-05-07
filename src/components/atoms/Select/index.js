import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>Label Select Option</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={selectedLanguage}
        // onValueChange={(itemValue, itemIndex) =>
        //   setSelectedLanguage(itemValue)
        // }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    height: 50,
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    padding: 2,
    justifyContent: 'center',
    paddingVertical: 0,
  },
});
