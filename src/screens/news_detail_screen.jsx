import React from 'react';
import {WebView} from 'react-native-webview';
import {baseAppUrl} from '../utils/constant';

const NewsDetailScreen = ({route}) => {
  const {id} = route.params;
  return (
    <WebView
      source={{
        uri: `${baseAppUrl}/web_view/posts/${id}`,
      }}
      startInLoadingState={true}
    />
  );
};

export default NewsDetailScreen;
