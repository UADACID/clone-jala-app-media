import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utils/colors';

const dummyImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtklGsvSriwElsw4yVPh4slVJ-meK2rMjotg&usqp=CAU';

const CardItem = ({
  onPress,
  shareContent,
  imageBannerUrl,
  title,
  description,
  date,
}) => {
  const _onPressShare = async () => {
    try {
      const result = await Share.share({
        message: shareContent,
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
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <Image
        source={{
          uri:
            imageBannerUrl != null && imageBannerUrl !== ''
              ? imageBannerUrl
              : dummyImageUrl,
        }}
        style={styles.header}
        resizeMode="cover"
      />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.date}>{date}</Text>
          <Ionicons
            name={'md-share-social-outline'}
            size={30}
            color="black"
            onPress={_onPressShare}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 0.5,
  },
  header: {
    height: 160,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  body: {
    padding: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.default,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 9,
  },
  subtitle: {
    color: 'grey',
    fontSize: 15,
    marginBottom: 12,
  },
  date: {
    color: 'gray',
  },
});

export default CardItem;
