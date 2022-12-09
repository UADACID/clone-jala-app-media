/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DiseasesDetailScreen from './src/screens/disease_detail_screen';
import HomeScreen from './src/screens/home_screen';
import MediaScreen from './src/screens/media_screen';
import NewsDetailScreen from './src/screens/news_detail_screen';
import PriceDetailScreen from './src/screens/price_detail_screen';
import {RootStackParamList} from './src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Media" component={MediaScreen} />
        <RootStack.Screen name="PriceDetail" component={PriceDetailScreen} />
        <RootStack.Screen name="NewsDetail" component={NewsDetailScreen} />
        <RootStack.Screen
          name="DiseasesDetail"
          component={DiseasesDetailScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
