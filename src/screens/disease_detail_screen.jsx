import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Share, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DiseasesDetailScreen = () => {
  // const navigation = useNavigation();

  // const _onPressShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       message: 'link',
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // // handle app bar action
  // useEffect(() => {
  //   _setNavigationBar();
  // }, [_setNavigationBar]);

  // const _setNavigationBar = useCallback(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Ionicons
  //         name={'md-share-social-outline'}
  //         color="white"
  //         size={30}
  //         onPress={_onPressShare}
  //       />
  //     ),
  //   });
  // }, [navigation]);

  return (
    <WebView
      source={{
        uri: 'https://app.jala.tech/web_view/diseases/1',
      }}
    />
  );
};

export default DiseasesDetailScreen;
