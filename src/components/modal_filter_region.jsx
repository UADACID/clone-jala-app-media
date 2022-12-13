import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utils/colors';
import {useDebounce} from 'usehooks-ts';
import {getListRegion} from '../services/shrimp_prices_service';
import {capitalFirstLetter, delay} from '../utils/helpers';

const ModalFilterRegion = ({
  selectedFilterRegion,
  onClose,
  onSelect = value => console.log(value),
}) => {
  const [searchKey, setSearchKey] = useState(selectedFilterRegion.full_name);
  const [list, setList] = useState([]);

  const [lastPage, setLastPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchKey, 400);

  const handleChange = value => {
    setSearchKey(value);
  };

  useEffect(() => {
    getList();
  }, [debouncedValue, getList]);

  const getList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getListRegion(searchKey, 1);
      const {data, meta} = response.data;
      setList(data);
      setLastPage(meta.last_page);
      setNextPage(meta.current_page + 1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('terjadi kesalahan', error.toString());
    }
  }, [searchKey]);

  const getMoreList = async () => {
    if (!loadingMore && nextPage <= lastPage) {
      try {
        setLoadingMore(true);
        const response = await getListRegion(searchKey, nextPage);
        await delay(600);
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

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id.toString()}
        onPress={() => {
          onSelect(item);
          onClose();
        }}
        style={styles.containerSizeItem}>
        <Text style={styles.sizeItem}>
          {capitalFirstLetter(item.full_name)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backdrop} />
      <View style={styles.contanerStackContent}>
        <View style={styles.secondBackdrop} />
        <KeyboardAvoidingView
          style={styles.containerContent}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.header}>
            <Text style={styles.title}>Kota/kabupaten</Text>
            <TouchableOpacity
              onPress={() => {
                onClose();
                onSelect({
                  full_name: '',
                  id: '',
                });
              }}
              style={styles.buttonClose}>
              <Text style={styles.labelCancel}>Tutup</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerContainerInput}>
            <View style={styles.containerInput}>
              <Ionicons name="search" color="#9F9E9E" size={26} />
              <TextInput
                value={searchKey}
                placeholder="Cari"
                style={styles.searchInput}
                onChangeText={handleChange}
                placeholderTextColor="#9F9E9E"
              />
            </View>
            <TouchableOpacity
              style={styles.iconClear}
              onPress={() => setSearchKey('')}>
              <Ionicons name="close-circle" color="#737373" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          {loading && (
            <View style={styles.containerLoading}>
              <ActivityIndicator />
            </View>
          )}
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.01}
            onEndReached={getMoreList}
            ListFooterComponent={
              loadingMore && (
                <View style={styles.containerEmpty}>
                  <ActivityIndicator />
                </View>
              )
            }
            ListEmptyComponent={
              !loading ? (
                <View style={styles.containerEmpty}>
                  <Text style={styles.textEmpty}>
                    Kota/kabupaten dengan kata kunci{' '}
                    <Text style={styles.textHighlight}>{searchKey}</Text> tidak
                    ditemukan
                  </Text>
                </View>
              ) : (
                <View />
              )
            }
            // contentContainerStyle={styles.containerList}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  secondBackdrop: {height: 145},
  contanerStackContent: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderColor: '#EFEFEF',
  },
  containerLoading: {
    margin: 20,
  },
  containerEmpty: {
    padding: 50,
  },
  textHighlight: {
    fontWeight: '600',
    color: Colors.primary,
  },
  textEmpty: {
    color: 'gray',
    textAlign: 'center',
  },
  containerContent: {
    backgroundColor: 'white',
    flex: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  sizeItem: {
    color: Colors.default,
  },
  containerSizeItem: {
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  title: {
    fontWeight: '600',
    marginLeft: 16,
    marginTop: 16,
    color: Colors.default,
  },
  buttonClose: {
    padding: 16,
  },
  labelCancel: {
    color: '#2477DF',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E9E9E9',
  },
  containerContainerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  containerInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginHorizontal: 16,
    backgroundColor: '#F4F5F6',
    paddingHorizontal: 6,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    color: Colors.default,
    flex: 1,
  },
  iconClear: {
    paddingRight: 20,
  },
});
export default ModalFilterRegion;
