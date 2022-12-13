import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getListShrimpNews} from '../services/shrimp_news_service';
import {delay} from '../utils/helpers';
import NewsItem from './news_item';
import TryAgain from './try_again';

const News = () => {
  const [list, setList] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getInitialList();
  }, [getInitialList]);

  const getInitialList = useCallback(async () => {
    try {
      console.log('re-fecth');
      setLoading(true);
      setErrorMessage('');
      const response = await getListShrimpNews(1);
      const {data, meta} = response.data;
      setList(data);
      setLastPage(meta.last_page);
      setNextPage(meta.current_page + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.toString());
      setLoading(false);
      Alert.alert('terjadi kesalahan', error.toString());
    }
  }, []);

  const getMoreList = async () => {
    if (!loadingMore && nextPage <= lastPage) {
      try {
        setLoadingMore(true);
        const response = await getListShrimpNews(nextPage);
        await delay(1000);
        const {data, meta} = response.data;
        setList(prevList => prevList.concat(data));
        setLastPage(meta.last_page);
        setNextPage(nextPage + 1);
        setLoadingMore(false);
      } catch (error) {
        console.error(error);
        setLoadingMore(false);
        Alert.alert('error get more list');
      }
    }
  };

  // first initial loading
  if (loading && list.length === 0) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator />
      </View>
    );
  }

  // render if error on initial action
  if (!loading && list.length === 0 && errorMessage !== '') {
    return <TryAgain message={errorMessage} onTryAgain={getInitialList} />;
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.ContainerNewsItem}>
        <NewsItem {...item} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getInitialList} />
        }
        onEndReachedThreshold={0.01}
        onEndReached={getMoreList}
        ListHeaderComponent={<Text style={styles.title}>Kabar Terbaru</Text>}
        ListFooterComponent={loadingMore && <ActivityIndicator />}
      />
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
  containerList: {
    paddingBottom: 100,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
