import React from 'react';
import {WebView} from 'react-native-webview';
import {baseAppUrl} from '../utils/constant';

const DiseasesDetailScreen = ({route}) => {
  const {id} = route.params;

  return (
    <WebView
      source={{
        uri: `${baseAppUrl}/web_view/diseases/${id}`,
      }}
      startInLoadingState={true}
    />
  );
};

export default DiseasesDetailScreen;
