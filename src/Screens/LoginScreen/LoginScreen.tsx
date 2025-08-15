import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import useLoginMutation from '../../Modules/LoginModule/Hooks/useLoginMutation';
import {login, selectIsLogin, selectUserData} from '../../redux/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useHrLoginMutation} from '../../Modules/LoginModule/Hooks/useHrLoginMutation';
import SnackbarHandler from '../../Utils/SnackbarHandler';
import {
  HrDataNotExists,
  selectHrData,
  setHrData,
} from '../../redux/hrAuthSlice';
import {Icons} from '../../Assets/icons';
import scaler from '../../Utils/scaler';
import AppBar from '../../Components/AppBar';
import IconButton from '../../Components/IconButton';
import CommonLoader from '../../Components/CommonLoader';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {store} from '../../redux/store';

const LoginScreen = () => {
  const [secureText, setSecureText] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {mutate: loginBssUser} = useLoginMutation();
  const {mutate: loginHrUser} = useHrLoginMutation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const validateAndLogin = () => {
    if (!email.trim()) {
      return SnackbarHandler.errorToast('User ID is required');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return SnackbarHandler.errorToast('Please enter a valid email address');
    }

    if (!password.trim()) {
      return SnackbarHandler.errorToast('Password is required');
    }
    setLoading(true);
    loginBssUser(
      {
        username: email?.trim(),
        password: password,
        deviceId: '',
      },
      {
        onSuccess: response => {
          if (response.data.Status === 'Success') {
            const data = response.data;
            console.log(data, '------BSS LOGIN ------');
            const {HrEmail} = data; // corrected from userData
            if (HrEmail) {
              const params = {
                userid: HrEmail,
                password: '',
                appSessionID: '',
                userlogindata: {
                  complinkid: 0,
                  dbInfolinkid: 0,
                  id: 0,
                  linkid: 0,
                  isource: 0,
                  userlinkid: 0,
                  guid: '',
                  latitude: 0,
                  longitude: 0,
                  sysip: 'android/ios',
                  sysmac: '',
                  logindatetime: '',
                  logoutdatetime: '',
                  dDay: 0,
                  mMonth: 0,
                  yYear: 0,
                },
                dbInfolinkid: 0,
                isVerifyUserExists: true,
              };

              loginHrUser(params, {
                onSuccess: async (item: any) => {
                  if (item?.data?.status.status === '1') {
                    try {
                      const {token, FinYearId} = item.data?.Data;
                      const {
                        linkid,
                        financialyearlinkid,
                        DBInfolinkid,
                        operatortype,
                        selectedcompanylinkid,
                      } = item.data?.Data?.userData;

                      const {
                        EmployeeId,
                        Grade,
                        District,
                        DepartmentId,
                        IsRM,
                        IsHod,
                      } = item.data?.Data?.userData?.EmployeeDetails;

                      const userSession = {
                        token: token,
                        FinYearId: FinYearId,
                        linkid: linkid,
                        financialyearlinkid: financialyearlinkid,
                        DBInfolinkid: DBInfolinkid,
                        EmployeeId: EmployeeId,
                        Grade: Grade,
                        DepartmentId: DepartmentId,
                        IsRM: IsRM,
                        IsHod: IsHod,
                        District: District,
                        operatortype: operatortype,
                        selectedcompanylinkid: selectedcompanylinkid,
                      };
                      SnackbarHandler.successToast('Login Successfully');
                      setLoading(false);
                      dispatch(setHrData(userSession));
                      dispatch(login(data));
                    } catch (error) {
                      console.log(error);
                    }
                  } else {
                    SnackbarHandler.normalToast(
                      'User is not mapped with Marg HR. Please contact admin.',
                    );
                    dispatch(login(data));
                    dispatch(HrDataNotExists());
                    setLoading(false);
                  }
                },
                onError: () => {
                  setLoading(false);
                  SnackbarHandler.errorToast('HR login failed');
                },
              });
            }
          } else {
            setLoading(false);
            SnackbarHandler.errorToast(response?.data?.Message);
          }
        },
        onError: () => {
          setLoading(false);
          SnackbarHandler.errorToast('Invalid User ID or Password');
        },
      },
    );
  };
  return (
    <>
      <AppBar back={false} Header="Login" subHeader={''} />

      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Icons.appLogo} style={styles.logo} />
        </View>

        <Text style={styles.label}>User ID</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter User ID"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={secureText}
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={{marginHorizontal: scaler(10)}}>
            <IconButton
              onPress={() => setSecureText(!secureText)}
              name={secureText ? 'eye-off-outline' : 'eye'}
              size={scaler(28)}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={validateAndLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      {loading && <CommonLoader />}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: scaler(-30),
    borderTopStartRadius: scaler(30),
    borderTopEndRadius: scaler(30),
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaler(16),
  },
  header: {
    marginTop: scaler(25),
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: scaler(100),
    height: scaler(100),
    resizeMode: 'contain',
    marginBottom: 10,
  },
  label: {
    margin: scaler(5),
    color: '#999',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderRadius: scaler(15),
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: '#000',
    fontSize: scaler(16),
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  forgotText: {
    color: '#888',
  },
  loginButton: {
    backgroundColor: '#3629B7',
    paddingVertical: scaler(18),
    borderRadius: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
