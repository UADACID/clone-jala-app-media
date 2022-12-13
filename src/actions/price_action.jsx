import {Alert} from 'react-native';
import {getDetailShrimpPrices} from '../services/shrimp_prices_service';
import {baseAppUrl} from '../utils/constant';
import {priceListAdapter} from '../utils/helpers';

export const getPriceDetailAction = async props => {
  const {dispatch, initPriceId, initRegionId, navigation} = props;
  try {
    dispatch({
      type: 'set_value',
      paylod: {
        loading: true,
      },
    });
    const response = await getDetailShrimpPrices(initPriceId, initRegionId);
    const {data} = response.data;
    const {
      region: {
        regency_name: remoteRegencyName,
        province_name: remoteProvinceName,
      },
      contact: remoteContact,
      updated_at: remoteUpdatedAt,
      creator: {
        buyer: remoteBuyer,
        name: remoteName,
        avatar: remoteAvatar,
        phone: remotePhone,
      },
      remark: remoteMarkId,
    } = data;

    const newValue = {
      regency: remoteRegencyName,
      province: remoteProvinceName,
      updatedAt: remoteUpdatedAt,
      isVerified: remoteBuyer,
      name: remoteName,
      avatarUrl: remoteAvatar,
      contact: remotePhone || remoteContact,
      sizes: priceListAdapter(data),
      note: remoteMarkId,
      loading: false,
      errorMessage: '',
    };

    dispatch({type: 'set_value', paylod: newValue});
    const shareUrl = `${baseAppUrl}/shrimp_prices/${initPriceId}`;
    navigation.setParams({
      shareUrl,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'set_value',
      paylod: {
        loading: false,
        errorMessage: error.toString(),
      },
    });
    Alert.alert('terjadi kesalahan', error.toString());
  }
};
