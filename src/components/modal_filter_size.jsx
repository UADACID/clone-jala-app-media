import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors} from '../utils/colors';

const ModalFilterSize = ({onClose}) => {
  // generate static array
  const listOfSize = Array.from({length: 19}, (_, i) => i * 10 + 20);

  return (
    <View style={styles.container}>
      <View style={styles.backdrop} />
      <View style={styles.contanerStackContent}>
        <View style={styles.secondBackdrop} />
        <View style={styles.containerContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Size</Text>
            <TouchableOpacity onPress={onClose} style={styles.buttonClose}>
              <Text style={styles.labelCancel}>Tutup</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {listOfSize.map(size => (
              <TouchableOpacity style={styles.containerSizeItem}>
                <Text style={styles.sizeItem}>{size}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
  secondBackdrop: {height: 100},
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
    borderBottomWidth: 1,
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
  },
  buttonClose: {
    padding: 16,
  },
  labelCancel: {
    color: '#2477DF',
    fontWeight: '600',
  },
});
export default ModalFilterSize;
