import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'

export const HomeIcon = ({icons, types, name, onPress, size = 30}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.containerStyle}>
      <Icon
        name={icons}
        size={size}
        type={types}
        color="tomato"
        containerStyle={style.iconStyle}
      />
      <Text style={style.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    // borderWidth: 1,
    alignItems: 'center',
    width: '25%',
    marginVertical: 10,
  },
  iconStyle: {
    borderWidth: 2,
    borderColor: 'tomato',
    borderRadius: 45,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 13,
  },
});
