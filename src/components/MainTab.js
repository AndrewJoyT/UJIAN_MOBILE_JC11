import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import {HomeStack} from './HomeStack';
import {Logout} from './Logout';

const ScreenOption = ({route}) => {
  return {
    tabBarIcon: ({focused, color, size}, iconName = '') => {
      if (route.name === 'HomeStack') {
        iconName = focused ? 'home' : 'home';
      } else if (route.name === 'Logout') {
        iconName = focused ? 'restaurant-menu' : 'restaurant-menu';
      }
      return <Icon name={iconName} size={size} color={color} />;
    },
  };
};

export const MainTab = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={ScreenOption}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Logout">
        {() => <Logout rootStack={navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
