import {GET_RESTAURANT_DETAILS} from '../../helpers/types';

const INITIAL_STATE = {
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
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_RESTAURANT_DETAILS:
      return payload;
    default:
      return state;
  }
};
