import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './Home';
import {RestaurantDetails} from './RestaurantDetails';

export const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};
