/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Text, Input, Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {onUserLogin} from '../redux/actions/AuthActions';

export const Login = ({navigation}) => {
  const Actions = useDispatch();
  const User = useSelector(({Auth}) => Auth.username);
  const Loading = useSelector(({Auth}) => Auth.loading);
  const AuthChecked = useSelector(({Auth}) => Auth.authChecked);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (User) {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'MainTab'}],
      });
      navigation.dispatch(resetAction);
    }
  });

  const onBtnLoginPress = () => {
    if (!Loading) {
      Actions(onUserLogin(username));
    }
  };

  if (AuthChecked && !User) {
    return (
      <>
        <View style={style.LoginContainer}>
          <View style={style.LoginLogo}>
            <Animatable.View
              animation={'fadeIn'}
              style={style.LogoIconContainer}
              duration={1000}>
              <Image
                source={require('../img/pwd2.png')}
                style={style.LogoIconImg}
              />
            </Animatable.View>
            <Animatable.View
              animation={'fadeIn'}
              style={style.LogoTextContainer}
              duration={2000}>
              
            </Animatable.View>
          </View>

          <View style={style.LoginInput}>
            <Input
              onChangeText={text => setUsername(text)}
              leftIcon={<Icon name="account-box" size={24} color="#114B5F" />}
              value={username}
              placeholder="Username"
            />
            {/* END OF LOGIN INPUT */}

            <View style={style.LoginButtonContainer}>
              <TouchableOpacity
                onPress={onBtnLoginPress}
                style={style.LoginButtonStyle}>
                {Loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={style.LoginButtonText}>Login</Text>
                )}
              </TouchableOpacity>
            </View>
            {/* END OF LOGIN BUTTON */}
          </View>

          <View style={style.LoginButtonArea}>
            <View style={style.RegButtonContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                {Loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={style.RegButtonText}>Go to Register</Text>
                )}
              </TouchableOpacity>
            </View>
            {/* END OF BUTTON SECTION */}
          </View>
          {/* END OF LOGIN CONTAINER */}
        </View>
      </>
    );
  }

  return (
    <View style={style.LoginContainer}>
      <Image
        source={require('../img/pwd2.png')}
        style={{height: 205, width: 200}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  LoginContainer: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },

  // ======================================== TOP LOGO
  LoginLogo: {
    // borderWidth: 1,
    marginTop: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoIconContainer: {
    height: 120,
    marginBottom: 10,
    justifyContent: 'center',
  },
  LogoIconImg: {
    width: 180,
    height: 120,
    resizeMode: 'contain',
  },
  LogoTextContainer: {
    height: 50,
    justifyContent: 'center',
  },
  LogoTextImg: {
    width: 150,
    height: 30,
    resizeMode: 'contain',
  },

  // =================================== INPUT SECTION
  LoginInput: {
    // borderWidth: 1,
    marginTop: 60,
    marginBottom: 120,
    alignItems: 'center',
    width: '100%',
  },
  // ===================================== LOGIN BUTTON
  LoginButtonContainer: {
    justifyContent: 'center',
    width: '95%',
    marginBottom: 10,
  },
  LoginButtonStyle: {
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
  },
  LoginButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  // ============================= GO TO REGISTER BUTTON
  LoginButtonArea: {
    // borderWidth: 1,
    width: '100%',
    height: 40,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegButtonContainer: {
    // borderWidth: 1,
    height: 40,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegButtonText: {
    color: 'black',
    fontSize: 16,
  },
});
