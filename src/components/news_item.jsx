import {useNavigation} from '@react-navigation/native';
import React from 'react';
import CardItem from './card_item';

const NewsItem = () => {
  const navigation = useNavigation();
  return (
    <CardItem
      title="Baruno: Alat Kualitas Air Pintar Handal dan Praktis"
      description="Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu ketiga, memasuki tahun lorempisum dolor sit amet zzzzzzzz"
      date="30 April 2020"
      shareContent="link news detail"
      onPress={() => navigation.navigate('NewsDetail')}
    />
  );
};

export default NewsItem;
