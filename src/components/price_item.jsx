import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import 'moment/src/locale/id';
moment.locale('id');
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../utils/colors';
import {baseStorageUrl} from '../utils/constant';
import {capitalFirstLetter, currencyAdapter} from '../utils/helpers';
import Verified from './verified';

const PriceItem = props => {
  const navigation = useNavigation();
  const name = props.creator.name;
  const avatarUrl = `${baseStorageUrl}/${props.creator.avatar}`;
  const currencyId = props.currency_id;
  const province = props.region.province_name || '-';
  const regency = props.region.regency_name || '-';
  const priceBySize = props[`size_${props.selectedSize}`] || 0;
  const updatedAt = moment(props.updated_at).format('DD MMMM YYYY');
  const isVerified = props.creator.buyer;

  const redirectPriceDetail = () => {
    navigation.navigate('PriceDetail', {...props});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.containerSupplierName}>
            <Image source={{uri: avatarUrl}} style={styles.photo} />
            <View>
              <Text style={styles.label}>Supplier</Text>
              <Text style={styles.name}>{name}</Text>
            </View>
          </View>
          <View style={styles.containerRegion}>
            <Text style={styles.label}>{updatedAt}</Text>
            <Text style={styles.subtitleRegion}>
              {capitalFirstLetter(province)}
            </Text>
            <Text style={styles.titleRegion}>
              {capitalFirstLetter(regency)}
            </Text>
          </View>
        </View>
        <Verified isVerified={isVerified} />
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.label}>size {props.selectedSize}</Text>
          <Text style={styles.price}>
            {currencyId} {currencyAdapter(priceBySize)}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={redirectPriceDetail}>
          <Text style={styles.buttonLabel}>LIHAT DETAIL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: 'white',
    borderRadius: 5,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerSupplierName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2.5,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  containerRegion: {
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: 10,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  photo: {
    width: 34,
    height: 34,
    borderRadius: 35,
    backgroundColor: '#E5E5E5',
    marginRight: 10,
  },
  label: {
    color: '#859ED1',
    fontSize: 13,
    marginBottom: 3,
  },
  name: {
    fontSize: 15,
    color: Colors.default,
  },
  titleRegion: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.default,
  },
  subtitleRegion: {
    fontSize: 14,
    color: Colors.default,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.default,
  },
  button: {
    backgroundColor: '#2477DF',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 5,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PriceItem;
