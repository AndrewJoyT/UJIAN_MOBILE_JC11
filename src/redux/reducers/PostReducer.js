import {
  GET_POST_LIST,
  REFRESHING,
  GET_RESTAURANT_DETAILS,
} from '../../helpers/types';

const INITIAL_STATE = {
  Refresh: false,
  Loading: true,

  PostList: [],
  // PostList: [
  //   {
  //     name: '',
  //     featured_image: '',
  //     user_rating: {
  //       aggregate_rating: '',
  //     },
  //   },
  // ],

  PostDetails: {
    name: '',
    featured_image: '',
    user_rating: {
      aggregate_rating: '',
    },
    location: {
      address: '',
    },
    cuisines: '',
    timings: '',
    average_cost_for_two: '',
    currency: '',
  },
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case REFRESHING:
      return {...state, Refresh: true};
    case GET_POST_LIST:
      return {...state, loading: false, Refresh: false, PostList: payload};
    case GET_RESTAURANT_DETAILS:
      return {...state, PostDetails: payload};
    default:
      return state;
  }
};
