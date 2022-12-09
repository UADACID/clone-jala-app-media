import React from 'react';
import {Props} from '../types';

const {View, StyleSheet, Button} = require('react-native');

const HomeScreen = ({navigation}) => {
  const gotoMedia = () => navigation.navigate('Media');

  return (
    <View style={styles.container}>
      <Button title="go to Jala Media" onPress={gotoMedia} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
