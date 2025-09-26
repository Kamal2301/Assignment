import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Images} from '../../Assets/images';
import scaler from '../../Utils/scaler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ResetPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isRePasswordVisible, setRePasswordVisible] = useState(false);

  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden translucent backgroundColor="transparent" />

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerSpacer} />
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.tabContainer}>
            <Text style={styles.tabText}>Set Password</Text>
          </View>
        </View>

        <View style={styles.spacing40} />

        <View style={styles.centerTextContainer}>
          <Text style={styles.centerText}>Enter your new password below</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter password"
              secureTextEntry={!isPasswordVisible}
              style={styles.passwordInput}
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!isPasswordVisible)}>
              <Icon
                name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                size={22}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Re-enter Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Re-enter password"
              secureTextEntry={!isRePasswordVisible}
              style={styles.passwordInput}
              placeholderTextColor="#aaa"
              value={rePassword}
              onChangeText={setRePassword}
            />
            <TouchableOpacity
              onPress={() => setRePasswordVisible(!isRePasswordVisible)}>
              <Icon
                name={isRePasswordVisible ? 'visibility' : 'visibility-off'}
                size={22}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // disabled={password === '' || rePassword === ''}
            // onPress={() => navigation.navigate('Verification')}
            style={[styles.loginButton]}>
            <Text style={styles.loginButtonText}>Set Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#F6F5FA',
    alignItems: 'center',
    borderBottomEndRadius: scaler(28),
    borderBottomStartRadius: scaler(28),
  },
  headerSpacer: {
    height: scaler(60),
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 80,
    marginVertical: 20,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tabText: {
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 30,
    paddingBottom: 10,
    color: 'black',
  },
  spacing40: {
    height: scaler(40),
  },
  centerTextContainer: {
    alignItems: 'center',
  },
  centerText: {
    fontSize: scaler(16),
    color: '#9B999F',
    textAlign: 'center',
  },
  inputContainer: {
    paddingHorizontal: scaler(40),
    marginTop: scaler(30),
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#9B999F',
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: scaler(50),
    paddingHorizontal: scaler(40),
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
