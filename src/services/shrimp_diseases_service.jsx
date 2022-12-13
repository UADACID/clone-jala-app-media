import axios from 'axios';
import {baseApiUrl} from '../utils/constant';
import {dummyToken} from '../utils/dummy_token';

export const getListShrimpDiseases = page => {
  return axios({
    method: 'get',
    url: `${baseApiUrl}/diseases`,
    headers: {
      Authorization: `Bearer ${dummyToken}`,
    },
    params: {
      per_page: '15',
      page: page,
      with: 'creator',
    },
  });
};
