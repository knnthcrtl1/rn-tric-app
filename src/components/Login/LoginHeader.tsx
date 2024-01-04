import React from 'react';
import View from '../../styled-components/View';
import Logo from '../../assets/images/svg/logo.svg';
import Text from '../../styled-components/Text';

const LoginHeader = () => {
  return (
    <View className="flex flex-column items-center space-y-2">
      <Logo />
      <Text className="text-2xl text-primary-blue">Taxi App</Text>
    </View>
  );
};

export default LoginHeader;
