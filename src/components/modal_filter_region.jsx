import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utils/colors';

const ModalFilterRegion = ({onClose}) => {
  const listOfRegion = [
    'Aceh, Simeulue',
    'Aceh, Simeulue, Tupah Selatan',
    'Aceh, Simeulue, Tupah Selatan, Labuhan Bajau',
    'Aceh, Simeulue, Tupah Selatan, Pulau Bengkalak',
    'Aceh, Simeulue, Tupah Selatan, Badegong',
    'Aceh, Simeulue, Tupah Selatan, Kebun Baru',
    'Aceh, Simeulue, Tupah Selatan, Ulul Mayang',
  ];

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
            <TouchableOpacity onPress={onClose} style={styles.buttonClose}>
              <Text style={styles.labelCancel}>Tutup</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerContainerInput}>
            <View style={styles.containerInput}>
              <Ionicons name="search" color="#9F9E9E" size={26} />
              <TextInput
                placeholder="Cari"
                style={styles.searchInput}
                placeholderTextColor="#9F9E9E"
              />
            </View>
            <TouchableOpacity style={styles.iconClear}>
              <Ionicons name="close-circle" color="#737373" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <ScrollView>
            {listOfRegion.map(size => (
              <TouchableOpacity
                key={size.toString()}
                style={styles.containerSizeItem}>
                <Text style={styles.sizeItem}>{size}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
