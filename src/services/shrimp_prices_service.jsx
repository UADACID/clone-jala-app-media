import axios from 'axios';
import {baseApiUrl} from '../utils/constant';

export const getListShrimpPrices = (page, region_id = '') => {
  return axios({
    method: 'get',
    url: `${baseApiUrl}/shrimp_prices`,
    params: {
      per_page: '5',
      page: page,
      with: 'region,creator',
      region_id: region_id,
    },
  });
};

export const getDetailShrimpPrices = (priceId, regionId) => {
  return axios({
    method: 'get',
    url: `${baseApiUrl}/shrimp_prices/${priceId}`,
    params: {
      with: 'region,creator',
      region_id: regionId,
    },
  });
};

export const getListRegion = (searchKey, page) => {
  return axios({
    method: 'get',
    url: `${baseApiUrl}/regions`,
    params: {
      has: 'shrimp_prices',
      search: searchKey,
      page,
      per_page: 20,
    },
  });
};
