import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  Image,
  RefreshControl,
} from 'react-native';
import TryAgain from '../components/try_again';
import Verified from '../components/verified';
import {getDetailShrimpPrices} from '../services/shrimp_prices_service';
import {Colors} from '../utils/colors';
import {baseStorageUrl} from '../utils/constant';
import {
  capitalFirstLetter,
  currencyAdapter,
  phoneNumberMasking,
  priceListAdapter,
} from '../utils/helpers';

const PriceDetailScreen = props => {
  const {params} = props.route;
  const navigation = useNavigation();

  // initial value
  const initPriceList = priceListAdapter(params);
  const {
    region: {
      regency_name: initRegencyName,
      province_name: initProvinceName,
      id: initRegionId,
    },
    contact: initContact,
    updated_at: initUpdatedAt,
    creator: {
      buyer: initBuyer,
      name: initName,
      avatar: initAvatar,
      phone: initPhone,
    },
    remark: initMarkId,
    id: initPriceId,
  } = params;

  // state
  const [regency, setRegency] = useState(initRegencyName || '-');
  const [province, setProvince] = useState(initProvinceName || '');
  const [updatedAt, setUpdatedAt] = useState(initUpdatedAt);
  const [isVerified, setIsVerified] = useState(
    initBuyer === null ? false : initBuyer,
  );
  const [name, setName] = useState(initName || '-');
  const [avatarUrl, setAvatarUrl] = useState(initAvatar || '-');
  const [contact, setContact] = useState(initPhone || initContact || '-');
  const [sizes, setSizes] = useState(initPriceList);
  const [note, setNote] = useState(initMarkId || '-');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  // action

  const getDetail = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage('');
      const response = await getDetailShrimpPrices(initPriceId, initRegionId);
      const {data} = response.data;
      const {
        region: {
          regency_name: remoteRegencyName,
          province_name: remoteProvinceName,
        },
        contact: remoteContact,
        updated_at: remoteUpdatedAt,
        creator: {
          buyer: remoteBuyer,
          name: remoteName,
          avatar: remoteAvatar,
          phone: remotePhone,
        },
        remark: remoteMarkId,
      } = data;

      setRegency(remoteRegencyName);
      setProvince(remoteProvinceName);
      setUpdatedAt(remoteUpdatedAt);
      setIsVerified(remoteBuyer === null ? false : remoteBuyer);
      setName(remoteName);
      setAvatarUrl(remoteAvatar);
      setContact(remotePhone || remoteContact);
      setSizes(priceListAdapter(data));
      setNote(remoteMarkId || '-');

      setLoading(false);
      const shareUrl = `https://app.jala.tech/shrimp_prices/${initPriceId}`;
      navigation.setParams({
        shareUrl,
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(error.toString());
      setLoading(false);
      Alert.alert('terjadi kesalahan', error.toString());
    }
  }, [initPriceId, initRegionId, navigation]);

  const _onPressHub = async () => {
    try {
      Linking.openURL(`tel:${contact}`);
    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getDetail} />
        }>
        <View style={styles.region}>
          <Text style={styles.regionTitle}>{capitalFirstLetter(province)}</Text>
          <Text style={styles.regionSubtitle}>
            {capitalFirstLetter(regency)}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.body}>
          <View style={styles.containerDate}>
            <Text style={styles.date}>
              {moment(updatedAt).format('DD MMMM YYYY')}
            </Text>
            <Verified isVerified={isVerified} />
          </View>

          <View style={styles.bio}>
            <Image
              source={{uri: `${baseStorageUrl}/${avatarUrl}`}}
              style={styles.photo}
            />
            <View>
              <Text style={styles.labelSupplier}>Supplier</Text>
              <Text style={styles.supplierName}>{name}</Text>
            </View>
          </View>
          <View style={styles.contact}>
            <View>
              <Text style={styles.labelContact}>Kontak</Text>
              <Text style={styles.contactValue}>
                {phoneNumberMasking(contact)}
              </Text>
            </View>
            <TouchableOpacity style={styles.buttonHub} onPress={_onPressHub}>
              <Text style={styles.labelButtonHub}>Hubungi</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.labelPriceList}>Daftar Harga</Text>
          {sizes.map((item, index) => {
            return (
              <View key={index.toString()} style={styles.priceItem}>
                <Text style={styles.sizeName}>{item.name}</Text>
                <Text style={styles.sizePrice}>
                  RP {currencyAdapter(item.price)}
                </Text>
              </View>
            );
          })}
          <Text style={styles.labelNote}>Catatan</Text>
          <Text style={styles.note}>{note}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PriceDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  region: {
    padding: 16,
  },
  regionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.default,
    marginBottom: 5,
  },
  regionSubtitle: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '600',
  },
  body: {
    padding: 16,
  },
  divider: {
    height: 4,
    backgroundColor: '#F1F5F9',
  },
  bio: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  date: {
    color: 'gray',
  },
  supplierName: {
    color: Colors.default,
    fontWeight: '600',
  },
  labelSupplier: {
    color: 'grey',
  },
  photo: {
    height: 32,
    width: 32,
    borderRadius: 32,
    backgroundColor: 'gray',
    marginRight: 8,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelContact: {
    color: 'gray',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 17,
    color: Colors.default,
    fontWeight: '400',
  },
  containerDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonHub: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 5,
  },
  labelButtonHub: {
    color: 'white',
    fontWeight: '600',
  },
  labelPriceList: {
    paddingTop: 20,
    paddingBottom: 6,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.default,
  },
  priceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  sizeName: {
    color: Colors.default,
    marginRight: 35,
    fontSize: 17,
  },
  sizePrice: {
    color: Colors.default,
    fontSize: 17,
  },
  labelNote: {
    color: Colors.default,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  note: {
    color: Colors.default,
    fontSize: 14,
  },
});
