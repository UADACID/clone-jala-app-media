import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {baseStorageUrl} from '../utils/constant';
import CardItem from './card_item';

const NewsItem = props => {
  const navigation = useNavigation();
  return (
    <CardItem
      title={props.title || 'untitled'}
      description={props.excerpt || '-'}
      date={moment(props.createdAt).format('DD MMMM YYYY')}
      shareContent={`https://app.jala.tech/posts/${props.id}`}
      imageBannerUrl={`${baseStorageUrl}/${props.image}`}
      onPress={() =>
        navigation.navigate('NewsDetail', {
          ...props,
          shareUrl: `https://app.jala.tech/posts/${props.id}`,
        })
      }
    />
  );
};

export default NewsItem;
