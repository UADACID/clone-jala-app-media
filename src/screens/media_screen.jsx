import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Diseases from '../components/diseases';
import News from '../components/news';
import Prices from '../components/prices';
import {Colors} from '../utils/colors';

const Tab = createMaterialTopTabNavigator();

const MediaScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Price"
        component={Prices}
        options={{
          lazy: true,
          title: 'Harga Udang',
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: '#737373',
          tabBarPressColor: '#F0F0F0',
          tabBarLabelStyle: {
            fontWeight: '600',
            textTransform: 'none',
            fontSize: 15,
          },
          tabBarIndicatorStyle: {
            height: 3,
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          lazy: true,
          title: 'Kabar Udang',
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: '#737373',
          tabBarPressColor: '#F0F0F0',
          tabBarLabelStyle: {
            fontWeight: '600',
            textTransform: 'none',
            fontSize: 15,
          },
          tabBarIndicatorStyle: {
            height: 3,
          },
        }}
      />
      <Tab.Screen
        name="Diseases"
        component={Diseases}
        options={{
          lazy: true,
          title: 'Penyakit',
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: '#737373',
          tabBarPressColor: '#F0F0F0',
          tabBarLabelStyle: {
            fontWeight: '600',
            textTransform: 'none',
            fontSize: 15,
          },
          tabBarIndicatorStyle: {
            height: 3,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MediaScreen;
