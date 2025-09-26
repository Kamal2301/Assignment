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

const ForgotPasswordScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden translucent backgroundColor="transparent" />

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topSpace} />
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={{height: scaler(10)}} />
          <View style={styles.tabContainer}>
            <Text style={styles.tabText}>Forgot Password</Text>
          </View>
        </View>

        <View style={styles.middleSpace} />

        <View style={styles.centerTextContainer}>
          <Text style={styles.centerText}>
            Enter the email address to send code
          </Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            placeholder="Enter email address"
            value={code}
            style={styles.input}
            placeholderTextColor="#aaa"
            onChangeText={setCode}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Verification', {type: 'forgot'});
            }}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topSpace: {
    height: scaler(70),
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
  logo: {
    width: scaler(200),
    height: scaler(80),
    marginVertical: scaler(10),
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tabText: {
    fontWeight: '700',
    fontSize: scaler(18),
    marginHorizontal: scaler(30),
    paddingBottom: scaler(10),
    color: 'black',
  },
  middleSpace: {
    height: scaler(50),
  },
  centerTextContainer: {
    alignItems: 'center',
  },
  centerText: {
    fontSize: scaler(18),
    color: '#9B999F',
  },
  inputWrapper: {
    paddingHorizontal: scaler(40),
    marginTop: scaler(40),
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: scaler(10),
    fontSize: scaler(14),
    fontWeight: '600',
    color: '#9B999F',
  },
  input: {
    width: '100%',
    borderBottomWidth: scaler(1),
    borderBottomColor: '#ccc',
    paddingVertical: scaler(8),
    marginBottom: scaler(10),
    fontSize: scaler(16),
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: scaler(50),
    paddingHorizontal: scaler(40),
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    width: '100%',
    paddingVertical: scaler(14),
    borderRadius: scaler(25),
    alignItems: 'center',
    marginVertical: scaler(20),
  },
  loginButtonText: {
    color: '#fff',
    fontSize: scaler(16),
    fontWeight: '600',
  },
});
