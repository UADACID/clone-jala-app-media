import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import NewsItem from './news_item';

const News = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Kabar Terbaru</Text>
        <View style={styles.ContainerNewsItem}>
          <NewsItem />
        </View>
        <View style={styles.ContainerNewsItem}>
          <NewsItem />
        </View>
        <View style={styles.ContainerNewsItem}>
          <NewsItem />
        </View>
        <View style={styles.ContainerNewsItem}>
          <NewsItem />
        </View>
        <View style={styles.ContainerNewsItem}>
          <NewsItem />
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
  ContainerNewsItem: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#124492',
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  containerFloatingFilter: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    left: 16,
    right: 16,
  },
});

export default News;
