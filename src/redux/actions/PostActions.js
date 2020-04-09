import Axios from 'axios';
import {API_URL, API_KEY} from '../../helpers/API_URL';

import {
  GET_POST_LIST,
  REFRESHING,
  GET_RESTAURANT_DETAILS,
  GET_REVIEW_ALL,
  GET_REVIEW_START,
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
  return async dispatch => {
    const options = {headers: {'user-key': API_KEY}};
    dispatch({type: GET_REVIEW_START});

    try {
      let review = await Axios.get(
        `${API_URL}/reviews?res_id=${data.id}&start=1&count=10`,
        options,
      );

      dispatch({type: GET_REVIEW_ALL, payload: review.data.user_reviews});
      dispatch({type: GET_RESTAURANT_DETAILS, payload: data});
    } catch (error) {
      console.log('rusak', error);
    }
  };
};
