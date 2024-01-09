import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Text from './Text';
import View from './View';

const SocialButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props}>
      <View className="text-login-btn">
        <Text className="text-center">{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;
