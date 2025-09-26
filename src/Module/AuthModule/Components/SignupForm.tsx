import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import scaler from '../../../Utils/scaler';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [uploadId, setUploadId] = useState('');
  const [uploadPhoto, setUploadPhoto] = useState('');
  const [about, setAbout] = useState('');
  const [location, setLocation] = useState('');

  const navigation = useNavigation<NavigationProp<any>>();

  const isDisabled =
    name === '' ||
    email === '' ||
    mobile === '' ||
    about === '' ||
    location === '';

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Email address</Text>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          placeholder="Enter mobile number"
          value={mobile}
          onChangeText={setMobile}
          style={styles.input}
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Upload ID</Text>
        <View style={styles.uploadContainer}>
          <TextInput
            placeholder="Upload ID"
            value={uploadId}
            onChangeText={setUploadId}
            style={styles.uploadInput}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="photo-camera" size={scaler(22)} color="#666" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Upload Photo</Text>
        <View style={styles.uploadContainer}>
          <TextInput
            placeholder="Upload Photo"
            value={uploadPhoto}
            onChangeText={setUploadPhoto}
            style={styles.uploadInput}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="photo-camera" size={scaler(22)} color="#666" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Write something about yourself</Text>
        <TextInput
          placeholder="Type here..."
          value={about}
          onChangeText={setAbout}
          style={[styles.input, styles.textarea]}
          placeholderTextColor="#aaa"
          multiline
        />

        <Text style={styles.label}>Enter Location</Text>
        <TextInput
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Verification', {type: 'signup'});
          }}
          style={[styles.loginButton]}>
          <Text style={styles.loginButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: scaler(40),
  },
  container: {
    width: '100%',
    paddingHorizontal: scaler(40),
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: scaler(12),
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
    color: '#000',
  },
  textarea: {
    minHeight: scaler(80),
    textAlignVertical: 'top',
  },
  uploadContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scaler(1),
    borderBottomColor: '#ccc',
    marginBottom: scaler(10),
  },
  uploadInput: {
    flex: 1,
    paddingVertical: scaler(8),
    fontSize: scaler(16),
    color: '#000',
  },
  iconButton: {
    padding: scaler(6),
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    width: '100%',
    paddingVertical: scaler(14),
    borderRadius: scaler(25),
    alignItems: 'center',
    marginVertical: scaler(20),
  },
  disabledButton: {
    backgroundColor: '#A5D6A7',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: scaler(16),
    fontWeight: '600',
  },
  bottomSpace: {
    height: scaler(100),
  },
});
