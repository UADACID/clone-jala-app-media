import React from 'react';
import {WebView} from 'react-native-webview';

const NewsDetailScreen = () => (
  <WebView
    source={{
      uri: 'https://app.jala.tech/web_view/posts/100',
    }}
    startInLoadingState={true}
  />
);

export default NewsDetailScreen;
