import AsyncStorage from '@react-native-community/async-storage';

import {LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS} from '../../helpers/types';
import {Alert} from 'react-native';

export const isAlreadyLogin = () => {
  return async dispatch => {
    const username = await AsyncStorage.getItem('username');
    if (username) {
      dispatch({type: LOGIN_SUCCESS, payload: username});
    } else {
      dispatch({type: LOGIN_FAILED});
    }
  };
};

export const onUserLogin = username => {
  return async dispatch => {
    dispatch({type: LOGIN_START});
    if (username !== '') {
      await AsyncStorage.setItem('username', username);

      setTimeout(() => {
        dispatch({type: LOGIN_SUCCESS, payload: username});
      }, 1500);
    } else {
      dispatch({type: LOGIN_FAILED});
      Alert.alert(
        '',
        'Input username!',
        [
          // {text: 'Ask me later', onPress: () => console.log('later pressed')},
          // {text: 'Cancel', onPress: () => console.log('cancel pressed')},
          {text: 'Ok', onPress: () => console.log('ok pressed')},
        ],
        {cancelable: false},
      );
    }
  };
};

export const onUserLogout = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('username');
    dispatch({type: LOGIN_FAILED});
  };
};
