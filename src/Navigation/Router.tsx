import {NavigationContainer} from '@react-navigation/native';
import React, {Fragment} from 'react';
import MainStackNavigator from './StackNavigator/StackNavigator';

function Router() {
  return (
    <Fragment>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Fragment>
  );
}

export default Router;
