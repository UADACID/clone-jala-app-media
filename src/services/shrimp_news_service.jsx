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
      per_page: '15',
      page: page,
      with: 'creator',
    },
  });
};
