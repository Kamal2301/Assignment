/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PolicyViewerScreen from '../../Screens/PolicyViewerScreen/PolicyViewerScreen';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAuditScreen from '../../Screens/CreateAuditScreen/CreateAuditScreen';
import IconButton from '../../Components/IconButton';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Policy') {
            iconName = 'text-box';
          } else if (route.name === 'Profile') {
            iconName = 'account-box-outline';
          }

          return <IconButton name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Policy" component={PolicyViewerScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuditList" component={HomeScreen} />
      <Stack.Screen name="CreateAudit" component={CreateAuditScreen} />
    </Stack.Navigator>
  );
}
