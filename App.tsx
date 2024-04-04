/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import Router from './src/Navigation/Router';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={'gray'}
        />

        <Fragment>
          <Router />
        </Fragment>
      </SafeAreaView>
    </View>
  );
}

export default App;
