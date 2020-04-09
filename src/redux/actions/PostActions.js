import Axios from 'axios';
import {API_URL, API_KEY} from '../../helpers/API_URL';

import {
  GET_POST_LIST,
  REFRESHING,
  GET_RESTAURANT_DETAILS,
} from '../../helpers/types';

export const getPostList = () => {
  return async dispatch => {
    const options = {headers: {'user-key': API_KEY}};

    try {
      dispatch({type: REFRESHING});
      let {data} = await Axios.get(
        `${API_URL}/search?start=1&count=10&sort=rating`,
        options,
      );
      console.log('Get post successful');
      dispatch({type: GET_POST_LIST, payload: data.restaurants});
    } catch (err) {
      console.log(err);
    }
  };
};

export const getRestaurantDetails = data => {
  return {type: GET_RESTAURANT_DETAILS, payload: data};
};
