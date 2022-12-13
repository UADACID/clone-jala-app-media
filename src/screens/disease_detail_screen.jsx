import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Share, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DiseasesDetailScreen = ({route}) => {
  const {id} = route.params;

  return (
    <WebView
      source={{
        uri: `https://app.jala.tech/web_view/diseases/${id}`,
      }}
      startInLoadingState={true}
    />
  );
};

export default DiseasesDetailScreen;
