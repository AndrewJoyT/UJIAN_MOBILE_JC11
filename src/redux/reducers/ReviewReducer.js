import {GET_REVIEW_START, GET_REVIEW_ALL} from '../../helpers/types';

const INITIAL_STATE = {
  loading: true,
  userReviews: [
    {
      review: {
        rating: '',
        review_text: '',
        review_time_friendly: '',
        rating_text: '',
        user: {
          name: '',
          profile_image: '',
        },
      },
    },
  ],
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_REVIEW_START:
      return INITIAL_STATE;

    case GET_REVIEW_ALL:
      return {userReviews: payload, loading: false};
    default:
      return state;
  }
};
