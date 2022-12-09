import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import ModalFilterRegion from './modal_filter_region';
import ModalFilterSize from './modal_filter_size';

const FloatingPriceFilter = () => {
  const [modalFilterSizeVisible, setModalFilterSizeVisible] = useState(false);
  const [modalFilterRegionVisible, setModalFilterRegionVisible] =
    useState(false);

  const onPressSize = () => {
    setModalFilterSizeVisible(true);
  };

  const onPressRegion = () => {
    setModalFilterRegionVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerSize}
        activeOpacity={0.75}
        onPress={onPressSize}>
        <Text style={styles.label}>Size</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerRegion}
        activeOpacity={0.75}
        onPress={onPressRegion}>
        <Text style={styles.label}>Indonesia</Text>
      </TouchableOpacity>
      {/* modal for filter size */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFilterSizeVisible}
        onRequestClose={() => {
          setModalFilterSizeVisible(!modalFilterSizeVisible);
        }}>
        <View style={styles.modalSize}>
          <ModalFilterSize onClose={() => setModalFilterSizeVisible(false)} />
        </View>
      </Modal>
      {/* modal for filter region */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFilterRegionVisible}
        onRequestClose={() => {
          setModalFilterRegionVisible(!modalFilterRegionVisible);
        }}>
        <View style={styles.modalSize}>
          <ModalFilterRegion
            onClose={() => setModalFilterRegionVisible(false)}
          />
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
