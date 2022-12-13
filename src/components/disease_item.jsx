import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {baseStorageUrl} from '../utils/constant';
import CardItem from './card_item';

const DiseaseItem = props => {
  const navigation = useNavigation();
  return (
    <CardItem
      title={`${props.full_name} (${props.short_name})` || 'untitled'}
      description={props.meta_description || '-'}
      date={moment(props.createdAt).format('DD MMMM YYYY')}
      shareContent={`https://app.jala.tech/diseases/${props.id}`}
      imageBannerUrl={`${baseStorageUrl}/${props.image}`}
      onPress={() =>
        navigation.navigate('DiseasesDetail', {
          ...props,
          shareUrl: `https://app.jala.tech/diseases/${props.id}`,
        })
      }
    />
  );
};

export default DiseaseItem;
