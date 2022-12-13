import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utils/colors';

const Verified = ({isVerified = false}) => {
  if (!isVerified) {
    return (
      <View style={styles.containerUnverified}>
        <Text style={styles.label}>belum terverifikasi</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerStar}>
        <Ionicons name="md-star" color="white" />
      </View>
      <Text style={styles.label}>Terverifikasi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerUnverified: {
    borderRadius: 30,
    backgroundColor: '#E5E5E5',
    alignSelf: 'flex-start',
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
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
