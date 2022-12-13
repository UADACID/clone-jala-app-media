import axios from 'axios';
import {baseApiUrl} from '../utils/constant';
import {dummyToken} from '../utils/dummy_token';

export const getListShrimpNews = page => {
  return axios({
    method: 'get',
    url: `${baseApiUrl}/posts`,
    headers: {
      Authorization: `Bearer ${dummyToken}`,
    },
    params: {
      per_page: '5',
      page: page,
      with: 'creator',
    },
  });
};

// export const getDetailShrimpPrices = (priceId, regionId) => {
//   return axios({
//     method: 'get',
//     url: `${baseApiUrl}/shrimp_prices/${priceId}`,
//     params: {
//       with: 'region,creator',
//       region_id: regionId,
//     },
//   });
// };

// export const getListRegion = (searchKey, page) => {
//   return axios({
//     method: 'get',
//     url: `${baseApiUrl}/regions`,
//     params: {
//       has: 'shrimp_prices',
//       search: searchKey,
//       page,
//       per_page: 20,
//     },
//   });
// };
