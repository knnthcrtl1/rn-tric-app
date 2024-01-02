/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import Login from './src/screens/Login/Login';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
}

export default App;
