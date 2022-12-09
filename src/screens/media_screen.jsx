import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Diseases from '../components/diseases';
import News from '../components/news';
import Price from '../components/price';

const Tab = createMaterialTopTabNavigator();

const MediaScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Price" component={Price} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Diseases" component={Diseases} />
    </Tab.Navigator>
  );
};

export default MediaScreen;
