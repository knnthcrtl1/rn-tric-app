import React from 'react';
import {TextInput} from 'react-native-paper';
import Button from '../../styled-components/Button';
import View from '../../styled-components/View';
import Text from '../../styled-components/Text';

const VerifyOtp = () => {
  return (
    <View className="flex mt-2 space-x-2 mx-3">
      <Text className="text-center text-xl font-bold mb-2">
        Create your account
      </Text>
      <TextInput label="Verify" />
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        className="bg-primary-blue mt-1">
        Press me
      </Button>
      <Text className="text-center text-sm mt-2">Resend in (2 : 21)</Text>
    </View>
  );
};

export default VerifyOtp;
