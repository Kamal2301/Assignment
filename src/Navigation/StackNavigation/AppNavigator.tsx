import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import {RootState} from '../../redux/store';
import MainTabs from '../BottamTabNavigation/MainTabs';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const role = useSelector((state: RootState) => state.role.role);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!role ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
