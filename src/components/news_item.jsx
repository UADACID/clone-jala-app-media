import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../utils/colors';

const dummyImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtklGsvSriwElsw4yVPh4slVJ-meK2rMjotg&usqp=CAU';

const NewsItem = () => (
  <View style={styles.container}>
    <Image
      source={{uri: dummyImageUrl}}
      style={styles.header}
      resizeMode="cover"
    />
    <View style={styles.body}>
      <Text style={styles.title}>
        Baruno: Alat Kualitas Air Pintar Handal dan Praktis
      </Text>
      <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
        Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu ketiga,
        memasuki tahun lorempisum dolor sit amet zzzzzzzz
      </Text>
      <View style={styles.footer}>
        <Text style={styles.date}>30 April 2020</Text>
        <Text>share icon</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 0.5,
  },
  header: {
    height: 160,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  body: {
    padding: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.default,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 9,
  },
  subtitle: {
    color: 'grey',
    fontSize: 15,
    marginBottom: 12,
  },
  date: {
    color: 'gray',
  },
});

export default NewsItem;
