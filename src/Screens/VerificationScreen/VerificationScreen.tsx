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
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const VerificationScreen = () => {
  const route = useRoute<RouteProp<any>>();
  const [code, setCode] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();
  console.log(route?.params?.type);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden translucent backgroundColor="transparent" />
      <View style={styles.topSpace} />

      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.tabContainer}>
            <Text style={styles.tabText}>Verification</Text>
          </View>
        </View>

        <View style={styles.middleSpace} />

        <View style={styles.centerTextContainer}>
          <Text style={styles.centerText}>
            Enter the 6-digit code we sent to
          </Text>
          <Text style={styles.boldText}>
            **mar@letsnas.com or (***) ****890
          </Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Verification Code</Text>
          <TextInput
            placeholder="Enter 6-digit code"
            value={code}
            style={styles.input}
            placeholderTextColor="#aaa"
            onChangeText={setCode}
          />
        </View>

        <TouchableOpacity style={styles.resendCodeButton}>
          <Text style={styles.resendCodeText}>Send a New Code</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              route.params?.type === 'forgot'
                ? navigation.navigate('ResetPassword')
                : null;
            }}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topSpace: {
    height: scaler(60),
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
    marginVertical: scaler(20),
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
  boldText: {
    fontSize: scaler(18),
    fontWeight: '700',
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
  resendCodeButton: {
    marginHorizontal: scaler(40),
    marginTop: scaler(10),
  },
  resendCodeText: {
    color: '#557FD1',
    fontSize: scaler(14),
    fontWeight: '700',
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
