import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import PriceItem from './price_item';

const Price = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Harga Terbaru</Text>
        <View style={styles.ContainerPriceItem}>
          <PriceItem />
        </View>
        <View style={styles.ContainerPriceItem}>
          <PriceItem />
        </View>
        <View style={styles.ContainerPriceItem}>
          <PriceItem />
        </View>
        <View style={styles.ContainerPriceItem}>
          <PriceItem />
        </View>
        <View style={styles.ContainerPriceItem}>
          <PriceItem />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  ContainerPriceItem: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#124492',
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default Price;
