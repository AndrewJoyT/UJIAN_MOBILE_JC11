import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';
import {isAlreadyLogin} from '../redux/actions';

import {Login} from './Login';
import {Register} from './Register';
import {MainTab} from './MainTab';

export const MainStack = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(isAlreadyLogin());
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </>
  );
};
