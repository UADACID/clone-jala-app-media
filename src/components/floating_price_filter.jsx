import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {capitalFirstLetter} from '../utils/helpers';
import ModalFilterRegion from './modal_filter_region';
import ModalFilterSize from './modal_filter_size';

const FloatingPriceFilter = ({
  selectedSize,
  setSelectedSize,
  selectedFilterRegion,
  onSelectRegion,
}) => {
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
        activeOpacity={0.95}
        onPress={onPressSize}>
        <MaterialCommunityIcons
          name="scale"
          color="white"
          size={24}
          style={styles.iconScale}
        />
        <View>
          <Text style={styles.textLabelSize}>Size</Text>
          <Text style={styles.TextValueSize}>{selectedSize}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerRegion}
        activeOpacity={0.95}
        onPress={onPressRegion}>
        <Ionicons
          name="location-sharp"
          color="white"
          size={24}
          style={styles.iconLocation}
        />
        <Text
          style={[
            styles.label,
            selectedFilterRegion.full_name.length > 25 ? {fontSize: 12} : {},
          ]}>
          {capitalFirstLetter(selectedFilterRegion.full_name) || 'Indonesia'}{' '}
        </Text>
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
          <ModalFilterSize
            selectedSize={selectedSize}
            onClose={() => setModalFilterSizeVisible(false)}
            onSelect={value => setSelectedSize(value)}
          />
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
            selectedFilterRegion={selectedFilterRegion}
            onClose={() => setModalFilterRegionVisible(false)}
            onSelect={value => onSelectRegion(value)}
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
    flexDirection: 'row',
  },
  containerRegion: {
    backgroundColor: '#2477DF',
    flex: 1.6,
    borderBottomEndRadius: 30,
    borderTopEndRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconLocation: {marginLeft: 16},
  label: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 16,
  },
  modalSize: {
    flex: 1,
  },
  textLabelSize: {
    color: 'white',
  },
  TextValueSize: {
    color: 'white',
    fontWeight: '600',
  },
  iconScale: {marginRight: 10},
});

export default FloatingPriceFilter;
