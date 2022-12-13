import React from 'react';
import {Alert, Share} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ShareButton = ({content = 'link'}) => {
  const _onPressShare = async () => {
    try {
      const result = await Share.share({
        message: content,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <Ionicons
      name="md-share-social-outline"
      color="white"
      size={26}
      onPress={_onPressShare}
    />
  );
};

export default ShareButton;
