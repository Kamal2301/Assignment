import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import scaler from '../../../Utils/scaler';
import {Images} from '../../../Assets/images';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {NavigationProp, useNavigation} from '@react-navigation/native';

function LoginForm() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <KeyboardAvoidingScrollView
      bounces={false}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      extraScrollHeight={100}
      enableOnAndroid={true}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          placeholder="Enter email"
          value={email}
          style={styles.input}
          placeholderTextColor="#aaa"
          onChangeText={setEmail}
        />

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

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={email === '' || password === ''}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or use one of your social profiles</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={Images.google}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={Images.facebook}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialText}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: scaler(100),
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: scaler(40),
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#9B999F',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
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
  forgotText: {
    alignSelf: 'flex-start',
    color: '#3b82f6',
    marginVertical: 10,
    fontWeight: '700',
    fontSize: scaler(14),
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
  orText: {
    color: '#9B999F',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: scaler(15),
  },
  socialContainer: {
    width: '100%',
    marginTop: 10,
  },
  socialButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  socialIcon: {
    height: scaler(24),
    width: scaler(24),
  },
  socialText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#333',
  },
});
