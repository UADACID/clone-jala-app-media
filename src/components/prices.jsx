import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Alert,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {getListShrimpPrices} from '../services/shrimp_prices_service';
import {Colors} from '../utils/colors';
import {delay} from '../utils/helpers';
import FloatingPriceFilter from './floating_price_filter';
import PriceItem from './price_item';

const Prices = () => {
  const [list, setList] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getInitialList();
  }, []);

  const getInitialList = async () => {
    try {
      setLoading(true);
      setErrorMessage('');
      const response = await getListShrimpPrices(1);
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
  };

  const getMoreList = async () => {
    if (!loadingMore && nextPage < lastPage) {
      try {
        setLoadingMore(true);
        const response = await getListShrimpPrices(nextPage);
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
    return (
      <View style={styles.containerError}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TouchableOpacity
          style={styles.buttonTryAgain}
          onPress={getInitialList}>
          <Text style={styles.textButtonTryAgain}>coba lagi</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({item}) => (
    <View style={styles.ContainerPriceItem}>
      <PriceItem {...item} />
    </View>
  );

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
        ListHeaderComponent={<Text style={styles.title}>Harga Terbaru</Text>}
        ListFooterComponent={loadingMore && <ActivityIndicator />}
      />
      <View style={styles.containerFloatingFilter}>
        <FloatingPriceFilter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
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
  containerList: {
    paddingBottom: 100,
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
  containerFloatingFilter: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    left: 16,
    right: 16,
  },
});

export default Prices;
