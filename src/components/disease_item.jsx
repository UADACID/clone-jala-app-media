import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import CardItem from './card_item';

const DiseaseItem = () => {
  const navigation = useNavigation();
  return (
    <CardItem
      title="Baruno: Alat Kualitas Air Pintar Handal dan Praktis"
      description="Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu ketiga, memasuki tahun lorempisum dolor sit amet zzzzzzzz"
      date="30 April 2020"
      shareContent="link news detail"
      imageBannerUrl={
        'https://i2.wp.com/gdmorganic.com/wp-content/uploads/2021/04/penyakit-myo-udang-vaname.jpg'
      }
      onPress={() => navigation.navigate('DiseasesDetail')}
    />
  );
};

export default DiseaseItem;
