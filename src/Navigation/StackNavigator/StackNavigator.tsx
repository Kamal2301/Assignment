import React, {Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';

const MainStack = createNativeStackNavigator<MainStackParamList>();

export type MainStackParamList = {
  Home: undefined;
};

function MainStackNavigator() {
  return (
    <Fragment>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name={'Home'} component={HomeScreen} />
      </MainStack.Navigator>
    </Fragment>
  );
}

export default MainStackNavigator;
