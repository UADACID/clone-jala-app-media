import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

const Diseases = () => {
  const navigation = useNavigation();
  return (
    <>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate('DiseasesDetail')}
      />
    </>
  );
};

export default Diseases;
