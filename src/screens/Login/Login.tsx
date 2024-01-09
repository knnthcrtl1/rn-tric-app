import React from 'react';
import View from '../../styled-components/View.tsx';
import LoginComponent from '../../components/Login';

const Login = () => {
  return (
    <View className="flex flex-row h-full justify-center items-center space-x-2 mx-3">
      <LoginComponent />
    </View>
  );
};

export default Login;
