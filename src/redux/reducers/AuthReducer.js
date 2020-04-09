import {LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS} from '../../helpers/types';

const INITIAL_STATE = {
  username: '',
  loading: false,
  authChecked: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_START:
      return {...state, loading: true};
    case LOGIN_FAILED:
      return {...INITIAL_STATE, username: payload, authChecked: true};
    case LOGIN_SUCCESS:
      return {...INITIAL_STATE, username: payload, authChecked: true};
    default:
      return state;
  }
};
