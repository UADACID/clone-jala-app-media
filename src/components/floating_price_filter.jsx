import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Alert,
  TouchableOpacity,
  Button,
} from 'react-native';
import ModalFilterSize from './modal_filter_size';

const FloatingPriceFilter = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const onPressSize = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerSize}
        activeOpacity={0.75}
        onPress={onPressSize}>
        <Text style={styles.label}>Size</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerRegion} activeOpacity={0.75}>
        <Text style={styles.label}>Indonesia</Text>
      </TouchableOpacity>
      {/* modal for filter size */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalSize}>
          <ModalFilterSize onClose={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'space-between',
  },
  containerSize: {
    backgroundColor: '#124492',
    flex: 1,
    borderBottomStartRadius: 30,
    borderTopStartRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRegion: {
    backgroundColor: '#2477DF',
    flex: 1.6,
    borderBottomEndRadius: 30,
    borderTopEndRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  modalSize: {
    flex: 1,
  },
});

export default FloatingPriceFilter;
