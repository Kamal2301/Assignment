import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use any icon lib
import BottamNavigation from '../BottamTabNavigation/BottamNavigation';
import scaler from '../../Utils/scaler';
import {useDispatch, useSelector} from 'react-redux';
import {logout, selectUserData} from '../../redux/authSlice';

export type DrawerParamList = {
  BottomTabs: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent = (props: any) => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}>
      <View style={styles.profileSection}>
        <Image
          source={require('../../Assets/Icons/appLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.username}>Welcome,{userData?.EmployeeName}</Text>
      </View>

      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('BottomTabs')}
        icon={({color, size}) => <Icon name="home" color={color} size={size} />}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Logout"
        onPress={() => dispatch(logout())}
        icon={({color, size}) => (
          <Icon name="logout" color={color} size={size} />
        )}
        labelStyle={styles.drawerLabel}
      />
      {/* Add more drawer items here if needed */}
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => (
  <Drawer.Navigator
    //  initialRouteName="Home"
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#fff',
        width: scaler(260),
      },
      drawerActiveTintColor: '#3629B7',
      drawerInactiveTintColor: '#555',
      drawerLabelStyle: {
        fontSize: 16,
      },
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="BottomTabs"
      component={BottamNavigation}
      options={{headerShown: false, drawerLabel: 'Dashboard'}}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  drawerLabel: {
    fontWeight: '500',
  },
});

export default DrawerNavigation;
