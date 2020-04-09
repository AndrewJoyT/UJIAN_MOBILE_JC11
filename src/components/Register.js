import React, {useReducer, useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Text, Input, Icon} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {onUserRegister} from '../redux/actions';

const Reducers = (state, {type, name, payload}) => {
  switch (type) {
    case 'CHANGE_DATA':
      return {...state, [name]: payload};
    case 'INITIAL_STATE':
      return {email: '', username: '', password: '', password2: ''};
    default:
      return state;
  }
};

export const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [state, action] = useReducer(Reducers, {
    email: undefined,
    username: undefined,
    password: undefined,
    password2: undefined,
  });
  const {email, username, password, password2} = state;
  const [passHidden, setPassHidden] = useState(true);
  const [passHidden2, setPassHidden2] = useState(true);

  const user = useSelector(({Auth}) => Auth.user);
  const loading = useSelector(({Auth}) => Auth.loadingLog);

  // useEffect(() => {
  //   if (user && email && username && password && password2) {
  //     action({type: 'INITIAL_STATE'});
  //     const resetAction = CommonActions.reset({
  //       index: 0,
  //       routes: [{name: 'MainStack'}],
  //     });
  //     navigation.action(resetAction);
  //   }
  // });

  const onBtnRegisterPress = () => {
    return Alert.alert(
      '',
      'Dalam masa Perbaikan, Silahkan Login saja?',
      [
        {text: 'Ask me later', onPress: () => console.log('later pressed')},
        {text: ''},
        {text: 'Ok', onPress: () => navigation.goBack()},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={style.RegContainer}>
      <View style={style.RegLogo}>
        <Animatable.View
          animation={'fadeIn'}
          style={style.LogoIcon}
          duration={1000}>
          <Image
            source={require('../img/pwd2.png')}
            style={style.LogoIconImg}
          />
        </Animatable.View>
      </View>
      <Animatable.Text animation="fadeIn" duration={2000}>
        <Text h3>Register</Text>
      </Animatable.Text>

      <View style={style.RegInput}>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" size={24} color="#114B5F" />}
          onChangeText={text =>
            action({type: 'CHANGE_DATA', name: 'email', payload: text})
          }
          value={email}
        />
        <Input
          placeholder="Username"
          leftIcon={<Icon name="account-box" size={24} color="#114B5F" />}
          onChangeText={text =>
            action({type: 'CHANGE_DATA', name: 'username', payload: text})
          }
          value={username}
        />
        <Input
          placeholder="Password"
          leftIcon={<Icon name="lock" size={24} color="#114B5F" />}
          rightIcon={
            <Icon
              name={passHidden ? 'visibility-off' : 'visibility'}
              size={24}
              color={passHidden ? '#bfc3c9' : '#114B5F'}
              onPress={() => setPassHidden(!passHidden)}
            />
          }
          onChangeText={text =>
            action({type: 'CHANGE_DATA', name: 'password', payload: text})
          }
          secureTextEntry={passHidden}
          value={password}
        />
        <Input
          placeholder="Re-enter password"
          leftIcon={<Icon name="lock" size={24} color="#114B5F" />}
          rightIcon={
            <Icon
              name={passHidden2 ? 'visibility-off' : 'visibility'}
              size={24}
              color={passHidden2 ? '#bfc3c9' : '#114B5F'}
              onPress={() => setPassHidden2(!passHidden2)}
            />
          }
          onChangeText={text =>
            action({type: 'CHANGE_DATA', name: 'password2', payload: text})
          }
          secureTextEntry={passHidden2}
          value={password2}
        />

        <View style={style.RegButtonContainer}>
          <TouchableOpacity
            onPress={onBtnRegisterPress}
            style={style.RegButtonStyle}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={style.RegButtonText}>Register</Text>
            )}
          </TouchableOpacity>
          {/* END OF REG BUTTON */}
        </View>

        {/* END OF REG INPUT */}
      </View>

      <View style={style.RegButtonArea}>
        <View style={style.LoginButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={style.LoginButtonText}>Back to Login</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* END OF BUTTON SECTION */}
      </View>

      {/* END OF REG CONTAINER */}
    </View>
  );
};

const style = StyleSheet.create({
  RegContainer: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },

  // ===== TOP LOGO
  RegLogo: {
    // borderWidth: 1,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  LogoIcon: {
    // borderWidth: 1,
    height: 100,
  },
  LogoIconImg: {
    flex: 1,
    width: 180,
    height: 120,
    resizeMode: 'contain',
  },

  // ===== INPUT SECTION
  RegInput: {
    // borderWidth: 1,
    marginTop: 30,
    marginBottom: 40,
    alignItems: 'center',
    width: '100%',
  },
  // ===== REGISTER BUTTON
  RegButtonContainer: {
    justifyContent: 'center',
    width: '95%',
    marginBottom: 15,
  },
  RegButtonStyle: {
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#114B5F',
  },
  RegButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  // ===== BACK TO LOGIN BUTTON
  RegButtonArea: {
    // borderWidth: 1,
    width: '100%',
    height: 40,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginButtonContainer: {
    // borderWidth: 1,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginButtonText: {
    color: 'black',
    fontSize: 16,
  },
});
