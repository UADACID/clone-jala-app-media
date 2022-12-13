import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../utils/colors';

const TryAgain = ({message = '', onTryAgain = () => console.log('null')}) => (
  <View style={styles.containerError}>
    <Text style={styles.errorMessage}>{message}</Text>
    <TouchableOpacity style={styles.buttonTryAgain} onPress={onTryAgain}>
      <Text style={styles.textButtonTryAgain}>coba lagi</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  containerError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: 'gray',
  },
  buttonTryAgain: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    margin: 16,
  },
  textButtonTryAgain: {
    color: 'white',
  },
});

export default TryAgain;
