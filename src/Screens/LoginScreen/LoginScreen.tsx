import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Images} from '../../Assets/images';
import scaler from '../../Utils/scaler';
import LoginForm from '../../Module/AuthModule/Components/LoginForm';
import SignupForm from '../../Module/AuthModule/Components/SignupForm';

const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

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
            <TouchableOpacity onPress={() => setActiveTab('login')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'login' && styles.activeTabText,
                ]}>
                Login
              </Text>
              {activeTab === 'login' && <View style={styles.activeIndicator} />}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setActiveTab('signup')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'signup' && styles.activeTabText,
                ]}>
                Sign-up
              </Text>
              {activeTab === 'signup' && (
                <View style={styles.activeIndicator} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formSpacer} />

        {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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
    height: scaler(50),
    backgroundColor: '#fff',
  },
  logo: {
    width: scaler(200),
    height: scaler(100),
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
    color: '#999',
  },
  activeTabText: {
    color: '#000',
  },
  activeIndicator: {
    height: scaler(3),
    backgroundColor: '#557FD1',
  },
  formSpacer: {
    height: scaler(40),
  },
});
