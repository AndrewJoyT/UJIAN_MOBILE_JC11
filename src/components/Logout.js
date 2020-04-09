import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {onUserLogout} from '../redux/actions/AuthActions';

export const Logout = ({navigation, rootStack}) => {
  const Actions = useDispatch();
  const User = useSelector(({Auth}) => Auth.username);

  useEffect(() => {
    if (!User) {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
      rootStack.dispatch(resetAction);
    }
  }, [rootStack, User]);

  const onBtnLogoutPress = () => {
    Alert.alert(
      '',
      'Are you sure to logout?',
      [
        // {text: 'Ask me later', onPress: () => console.log('Later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel pressed')},
        {text: 'Ok', onPress: () => Actions(onUserLogout())},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={style.SettingContainer}>
      <View style={style.ButtonContainer}>
        <TouchableOpacity onPress={onBtnLogoutPress} style={style.ButtonStyle}>
          <Text style={style.ButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  SettingContainer: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ===================================== BUTTON
  ButtonContainer: {
    // borderWidth: 1,
    flex: 1,
    width: '50%',
    justifyContent: 'center',
  },
  ButtonStyle: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#114B5F',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
