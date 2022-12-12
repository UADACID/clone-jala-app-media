import React from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const DiseasesDetailScreen = () => (
  <WebView
    source={{
      uri: 'https://app.jala.tech/web_view/diseases/1',
    }}
  />
);

export default DiseasesDetailScreen;
