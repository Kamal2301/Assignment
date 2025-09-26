import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import VerificationScreen from '../../Screens/VerificationScreen/VerificationScreen';
import ForgotPasswordScreen from '../../Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from '../../Screens/ResetPasswordScreen/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
