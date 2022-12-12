import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const NewsDetailScreen = () => (
  <WebView
    source={{
      uri: 'https://app.jala.tech/web_view/posts/100',
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsDetailScreen;
