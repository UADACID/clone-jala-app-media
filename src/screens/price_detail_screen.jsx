import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import Verified from '../components/verified';
import {Colors} from '../utils/colors';

const PriceDetailScreen = () => {
  const priceList = [
    {
      name: 'Size 20',
      price: 97000,
    },
    {
      name: 'Size 30',
      price: 97000,
    },
    {
      name: 'Size 40',
      price: 97000,
    },
    {
      name: 'Size 50',
      price: 97000,
    },
    {
      name: 'Size 60',
      price: 97000,
    },
    {
      name: 'Size 70',
      price: 97000,
    },
    {
      name: 'Size 80',
      price: 97000,
    },
  ];

  const _onPressHub = async () => {
    try {
      Linking.openURL('tel:6285641560xxx');
    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.region}>
          <Text style={styles.regionTitle}>Nusa Tenggara</Text>
          <Text style={styles.regionSubtitle}>Sumba</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.body}>
          <View style={styles.containerDate}>
            <Text style={styles.date}>16 Januari 2020</Text>
            <Verified />
          </View>

          <View style={styles.bio}>
            <View style={styles.photo} />
            <View>
              <Text style={styles.labelSupplier}>Supplier</Text>
              <Text style={styles.supplierName}>Mina Udang Barokah</Text>
            </View>
          </View>
          <View style={styles.contact}>
            <View>
              <Text style={styles.labelContact}>Kontak</Text>
              <Text style={styles.contactValue}>+6285641560XXX</Text>
            </View>
            <TouchableOpacity style={styles.buttonHub} onPress={_onPressHub}>
              <Text style={styles.labelButtonHub}>Hubungi</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.labelPriceList}>Daftar Harga</Text>
          {priceList.map((item, index) => {
            return (
              <View key={index.toString()} style={styles.priceItem}>
                <Text style={styles.sizeName}>{item.name}</Text>
                <Text style={styles.sizePrice}>RP {item.price}</Text>
              </View>
            );
          })}
          <Text style={styles.labelNote}>Catatan</Text>
          <Text style={styles.note}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>
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
    justifyContent: 'center',
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
