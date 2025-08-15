import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearRole} from '../../redux/roleSlice';
import {RootState} from '../../redux/store';
import scaler from '../../Utils/scaler';
import IconButton from '../../Components/IconButton';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.role.role);

  const handleLogout = () => {
    dispatch(clearRole());
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
      }}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        {/* Profile Icon */}
        <IconButton
          name="account-circle"
          size={scaler(100)}
          color="#fff"
          style={styles.profileIcon}
        />

        {/* Role Info */}
        <Text style={styles.roleLabel}>Current Role</Text>
        <Text style={styles.roleText}>{role}</Text>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <IconButton name="logout" size={scaler(20)} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: scaler(20),
  },
  profileIcon: {
    marginBottom: scaler(20),
  },
  roleLabel: {
    fontSize: scaler(18),
    color: '#ddd',
    marginBottom: scaler(5),
  },
  roleText: {
    fontSize: scaler(28),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: scaler(30),
    textTransform: 'capitalize',
  },
  logoutBtn: {
    flexDirection: 'row',
    backgroundColor: '#e74c3c',
    paddingVertical: scaler(12),
    paddingHorizontal: scaler(20),
    borderRadius: scaler(8),
    alignItems: 'center',
    elevation: 5,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: scaler(16),
    marginLeft: scaler(8),
  },
});
