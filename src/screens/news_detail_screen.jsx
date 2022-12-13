import React from 'react';
import {WebView} from 'react-native-webview';

const NewsDetailScreen = ({route}) => {
  const {id} = route.params;
  return (
    <WebView
      source={{
        uri: `https://app.jala.tech/web_view/posts/${id}`,
      }}
      startInLoadingState={true}
    />
  );
};

export default NewsDetailScreen;
