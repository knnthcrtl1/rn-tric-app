import React from 'react';
import View from '../../styled-components/View';
import Logo from '../../assets/images/svg/logo.svg';
import Text from '../../styled-components/Text';
import {TextInput} from 'react-native-paper';
import Button from '../../styled-components/Button';

const LoginHeader = () => {
  return (
    <View className="flex space-y-2">
      <View className="flex items-center">
        <Logo />
      </View>
      <Text className="text-center text-3xl text-primary-blue">Taxi App</Text>
      <Text className="text-center text-xl font-bold">Create your account</Text>
      <Text className="text-center leading-5 text-lg">
        Welcome to TAXI APP, enter your details below to continue ordering.
      </Text>
      <View>
        <TextInput label="Phone number" />
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          className="bg-primary-blue mt-1">
          Press me
        </Button>
      </View>
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
