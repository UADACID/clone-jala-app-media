import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Share, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DiseasesDetailScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://app.jala.tech/web_view/diseases/1',
      }}
      startInLoadingState={true}
    />
  );
};

export default DiseasesDetailScreen;
