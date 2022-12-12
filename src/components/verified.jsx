import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utils/colors';

const Verified = () => (
  <View style={styles.container}>
    <View style={styles.containerStar}>
      <Ionicons name="md-star" color="white" />
    </View>
    <Text style={styles.label}>Terverifikasi</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: '#FEF8E7',
    alignSelf: 'flex-start',
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerStar: {
    height: 18,
    width: 18,
    borderRadius: 18,
    backgroundColor: '#FCCE32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Colors.default,
    marginHorizontal: 5,
    fontSize: 13,
  },
});

export default Verified;
