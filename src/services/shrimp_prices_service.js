import axios from 'axios';
import {baseApiUrl} from '../utils/constant';

export const getListShrimpPrices = async page => {
  return axios({
    method: 'get',
    url: `${baseApiUrl}/shrimp_prices`,
    params: {
      per_page: '5',
      page: page,
      with: 'region,creator',
    },
  });
};

export const getDetailShrimpPrices = async (priceId, regionId) => {
  return axios({
    method: 'get',
    url: `${baseApiUrl}/shrimp_prices/${priceId}`,
    params: {
      with: 'region,creator',
      region_id: regionId,
    },
  });
};
