import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import ReviewReducer from './ReviewReducer';

export default combineReducers({
  Auth: AuthReducer,
  Post: PostReducer,
  Review: ReviewReducer,
});
