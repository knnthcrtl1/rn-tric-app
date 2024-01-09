import React from 'react';
import View from '../../styled-components/View';
import Logo from '../../assets/images/svg/logo.svg';
import Text from '../../styled-components/Text';

const LoginHeader = () => {
  return (
    <View className="flex flex-column items-center space-y-2 ">
      <Logo />
      <Text className="text-3xl text-primary-blue ">Taxi App</Text>
      <Text className="text-xl font-bold">Create your account</Text>
      <Text className="text-center leading-5 text-lg">
        Welcome to EINFARHT, enter your details below to continue ordering.
      </Text>
      <Text className="text-center text-lg">
        Already have an account?{' '}
        <Text className="text-primary-blue tracking-widest font-bold">
          LOG IN
        </Text>
      </Text>
    </View>
  );
};

export default LoginHeader;
