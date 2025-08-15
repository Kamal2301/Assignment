import * as React from 'react';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsLogin, selectUserData} from '../../redux/authSlice';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';
import ApprovalScreen from '../../Screens/ApprovalScreen/ApprovalScreen';
import DashboardDataListScreen from '../../Screens/DashboardDataListScreen/DashboardDataListScreen';
import MTPHomeScreen from '../../Screens/MTPHomeScreen/MTPHomeScreen';
import DwrScreenHome from '../../Screens/DwrScreenHome/DwrScreenHome';
import PreviewDwrDetails from '../../Modules/DwrModule/Components/PreviewDwrDetails/PreviewDwrDetails';
import ExpenseScreen from '../../Screens/ExpenseScreen/ExpenseScreen';
import ExpenseDetailScreen from '../../Screens/ExpenseDetailScreen/ExpenseDetailScreen';
import PolicyShowScreen from '../../Screens/PolicyShowScreen/PolicyShowScreen';
import {useGetCheckInStatusQuery} from '../../Modules/LoginModule/Hooks/useGetCheckInStatusQuery';
import CheckInScreen from '../../Screens/CheckInScreen/CheckInScreen';
import {checkin, selectCheckinData} from '../../redux/checkInSlice';
import LeaveRequestScreen from '../../Screens/LeaveRequestScreen/LeaveRequestScreen';
import AttendanceReportScreen from '../../Screens/AttendanceReportScreen/AttendanceReportScreen';
import LeaveStatusScreen from '../../Screens/LeaveStatusScreen/LeaveStatusScreen';

export type MainStackParamList = {
  Login: undefined;
  HomeScreen: undefined;
  DrawerTab: undefined;
  Approval: undefined;
  DashboardDataList: undefined;
  MTPHome: undefined;
  DwrHome: undefined;
  PreviewDwrDetails: undefined;
  ExpenseScreen: undefined;
  ExpenseDetailScreen: undefined;
  PolicyShowScreen: undefined;
  Checkin: undefined;
  LeaveRequest: undefined;
  AttendanceReport: undefined;
  ApprovalScreen: undefined;
  LeaveStatus: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();
const queryClient = new QueryClient();

const AppNavigation = () => {
  const isLogin = useSelector(selectIsLogin);

  const IsCheckInApplicable = useSelector(selectCheckinData);

  return (
    <>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {isLogin ? (
              IsCheckInApplicable ? (
                <Stack.Group>
                  <Stack.Screen name="Checkin" component={CheckInScreen} />
                </Stack.Group>
              ) : (
                <Stack.Group>
                  <Stack.Screen name="DrawerTab" component={DrawerNavigation} />
                  <Stack.Screen name="Approval" component={ApprovalScreen} />
                  <Stack.Screen name="MTPHome" component={MTPHomeScreen} />
                  <Stack.Screen name="DwrHome" component={DwrScreenHome} />
                  <Stack.Screen
                    name="ExpenseScreen"
                    component={ExpenseScreen}
                  />
                  <Stack.Screen
                    name="PolicyShowScreen"
                    component={PolicyShowScreen}
                  />
                  <Stack.Screen
                    name="ExpenseDetailScreen"
                    component={ExpenseDetailScreen}
                  />
                  <Stack.Screen
                    name="LeaveRequest"
                    component={LeaveRequestScreen}
                  />
                  <Stack.Screen
                    name="AttendanceReport"
                    component={AttendanceReportScreen}
                  />
                  <Stack.Screen
                    name="ApprovalScreen"
                    component={ApprovalScreen}
                  />
                  <Stack.Screen
                    name="LeaveStatus"
                    component={LeaveStatusScreen}
                  />
                  <Stack.Screen
                    name="PreviewDwrDetails"
                    component={PreviewDwrDetails}
                  />
                  <Stack.Screen
                    name="DashboardDataList"
                    component={DashboardDataListScreen}
                  />
                </Stack.Group>
              )
            ) : (
              <Stack.Group>
                <Stack.Screen name="Login" component={LoginScreen} />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
};
export default AppNavigation;
