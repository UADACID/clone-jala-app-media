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
import ShareButton from './src/components/share_button';
import DiseasesDetailScreen from './src/screens/disease_detail_screen';
import HomeScreen from './src/screens/home_screen';
import MediaScreen from './src/screens/media_screen';
import NewsDetailScreen from './src/screens/news_detail_screen';
import PriceDetailScreen from './src/screens/price_detail_screen';
import {RootStackParamList} from './src/types';
import {Colors} from './src/utils/colors';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary},
            headerTitleStyle: {
              color: 'white',
            },
            headerTitleAlign: 'left',
            headerTintColor: 'white',
          }}>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen
            name="Media"
            component={MediaScreen}
            options={{title: 'Jala Media'}}
          />
          <RootStack.Group
            screenOptions={props => ({
              headerRight: () => {
                const {shareUrl} = props.route.params;
                return <ShareButton content={shareUrl} />;
              },
            })}>
            <RootStack.Screen
              name="PriceDetail"
              component={PriceDetailScreen}
              options={{
                title: 'Harga Udang',
              }}
            />
            <RootStack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{title: 'Kabar Udang'}}
            />
            <RootStack.Screen
              name="DiseasesDetail"
              component={DiseasesDetailScreen}
              options={{title: 'Info Penyakit'}}
            />
          </RootStack.Group>
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
