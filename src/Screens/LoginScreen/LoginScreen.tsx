import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setRole} from '../../redux/roleSlice';
import scaler from '../../Utils/scaler';

export default function LoginScreen() {
  const dispatch = useDispatch();

  const handleSelectRole = (role: string) => {
    dispatch(setRole(role));
    // navigation.navigate('Home');
  };
  console.log('asdasdas');
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      }}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.header}>Internal Audit App</Text>
        <Text style={styles.subHeader}>Select your role to continue</Text>

        <View style={styles.roleRow}>
          <TouchableOpacity
            style={[styles.roleBtn, styles.admin]}
            onPress={() => handleSelectRole('Admin')}>
            <Text style={styles.roleText}>Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.roleBtn, styles.auditor]}
            onPress={() => handleSelectRole('Auditor')}>
            <Text style={styles.roleText}>Auditor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.roleBtn, styles.viewer]}
            onPress={() => handleSelectRole('Viewer')}>
            <Text style={styles.roleText}>Viewer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: scaler(20),
    justifyContent: 'center',
  },
  header: {
    fontSize: scaler(28),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: scaler(10),
    color: '#fff',
  },
  subHeader: {
    fontSize: scaler(16),
    textAlign: 'center',
    marginBottom: scaler(40),
    color: '#ddd',
  },
  roleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  roleBtn: {
    paddingVertical: scaler(15),
    paddingHorizontal: scaler(20),
    borderRadius: scaler(12),
    elevation: scaler(5),
  },
  roleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: scaler(16),
    textAlign: 'center',
  },
  admin: {backgroundColor: '#E74C3C'},
  auditor: {backgroundColor: '#3498DB'},
  viewer: {backgroundColor: '#2ECC71'},
});
