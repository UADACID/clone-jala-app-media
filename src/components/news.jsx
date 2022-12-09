import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

const News = () => {
  const navigation = useNavigation();
  return (
    <>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate('NewsDetail')}
      />
    </>
  );
};

export default News;
