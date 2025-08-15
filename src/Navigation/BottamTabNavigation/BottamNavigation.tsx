import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import DashboardScreen from '../../Screens/DashboardScreen/DashboardScreen';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Or any other icon lib

export type BottomTabParamList = {
  Home: undefined;
  Dashboard: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottamNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#3629B7',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';
          if (route.name === 'Dashboard') iconName = 'dashboard';

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarLabel: ({focused, color}) => (
          <Text
            style={{color, fontSize: 12, fontWeight: focused ? '700' : '500'}}>
            {route.name}
          </Text>
        ),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
    </Tab.Navigator>
  );
};

export default BottamNavigation;
