import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';

const NewsDetailScreen = ({navigation}) => {
  // useEffect(() => {
  //   navigation.setParams({shareUrl: navigation.route.params});
  // }, [navigation]);
  return (
    <WebView
      source={{
        uri: 'https://app.jala.tech/web_view/posts/100',
      }}
      startInLoadingState={true}
    />
  );
};

export default NewsDetailScreen;
