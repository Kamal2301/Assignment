import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addAudit} from '../../redux/auditSlice';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import scaler from '../../Utils/scaler';
import SnackbarHandler from '../../Utils/SnackbarHandler';
import IconButton from '../../Components/IconButton';

export default function CreateAuditScreen() {
  const [ratings, setRatings] = useState({
    quality: '',
    safety: '',
    efficiency: '',
  });
  const [checks, setChecks] = useState({
    documentsVerified: false,
    safetyProtocols: false,
  });
  const [comments, setComments] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const pickImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
    })
      .then(image => setImageUri(image.path))
      .catch(() => {});
  };

  const captureImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
    })
      .then(image => setImageUri(image.path))
      .catch(() => {});
  };

  const validateForm = () => {
    let newErrors = {};

    ['quality', 'safety', 'efficiency'].forEach(key => {
      const val = Number(ratings[key]);
      if (ratings[key] === '') {
        newErrors[key] = 'Required';
      } else if (isNaN(val) || val < 0 || val > 5) {
        newErrors[key] = 'Must be between 0 and 5';
      }
    });

    if (comments.trim() === '') {
      newErrors.comments = 'Comments are required';
    }
    if (!imageUri) {
      newErrors.image = 'Image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      SnackbarHandler.errorToast('Please correct the errors before saving.');
      return;
    }

    dispatch(
      addAudit({
        ratings: {
          quality: Number(ratings.quality),
          safety: Number(ratings.safety),
          efficiency: Number(ratings.efficiency),
        },
        checkboxes: checks,
        comments,
        image: imageUri,
      }),
    );
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <IconButton
            name="arrow-left"
            size={scaler(27)}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.heading}>Create New Audit</Text>
        </View>

        {['quality', 'safety', 'efficiency'].map(key => (
          <View key={key} style={styles.fieldContainer}>
            <Text style={styles.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Rating (0-5)
            </Text>
            <TextInput
              style={[styles.input, errors[key] && styles.inputError]}
              keyboardType="numeric"
              value={ratings[key]}
              onChangeText={val => setRatings({...ratings, [key]: val})}
            />
            {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
          </View>
        ))}

        {/* Checkboxes */}
        <View style={styles.checkboxRow}>
          <Text>Documents Verified</Text>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              checks.documentsVerified && styles.toggleYes,
            ]}
            onPress={() =>
              setChecks({
                ...checks,
                documentsVerified: !checks.documentsVerified,
              })
            }>
            <Text style={styles.toggleText}>
              {checks.documentsVerified ? 'Yes' : 'No'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxRow}>
          <Text>Safety Protocols</Text>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              checks.safetyProtocols && styles.toggleYes,
            ]}
            onPress={() =>
              setChecks({...checks, safetyProtocols: !checks.safetyProtocols})
            }>
            <Text style={styles.toggleText}>
              {checks.safetyProtocols ? 'Yes' : 'No'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Comments</Text>
        <TextInput
          style={[styles.textarea, errors.comments && styles.inputError]}
          multiline
          value={comments}
          maxLength={100}
          onChangeText={setComments}
          placeholder="Enter your comments here..."
        />
        {errors.comments && <Text style={styles.error}>{errors.comments}</Text>}

        <TouchableOpacity
          onPress={pickImageFromGallery}
          style={styles.imageBtn}>
          <Text style={styles.btnText}>📁 Pick from Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={captureImageFromCamera}
          style={styles.imageBtn}>
          <Text style={styles.btnText}>📷 Capture from Camera</Text>
        </TouchableOpacity>
        {errors.image && <Text style={styles.error}>{errors.image}</Text>}

        {imageUri && (
          <Image source={{uri: imageUri}} style={styles.previewImage} />
        )}

        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>💾 Save Audit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: scaler(15), backgroundColor: '#f9f9f9'},
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaler(15),
  },
  heading: {
    fontSize: scaler(22),
    fontWeight: 'bold',
    marginLeft: scaler(20),
    color: '#333',
  },
  fieldContainer: {marginBottom: scaler(10)},
  label: {fontSize: scaler(16), fontWeight: '500', marginBottom: scaler(5)},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: scaler(10),
    borderRadius: scaler(6),
    backgroundColor: '#fff',
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: scaler(10),
    borderRadius: scaler(6),
    height: scaler(80),
    backgroundColor: '#fff',
    marginBottom: scaler(5),
  },
  inputError: {borderColor: 'red'},
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scaler(8),
  },
  toggleBtn: {
    backgroundColor: '#ccc',
    paddingHorizontal: scaler(16),
    paddingVertical: scaler(8),
    borderRadius: scaler(20),
  },
  toggleYes: {backgroundColor: '#4CAF50'},
  toggleText: {color: '#fff', fontWeight: 'bold'},
  imageBtn: {
    backgroundColor: '#007BFF',
    padding: scaler(12),
    alignItems: 'center',
    borderRadius: scaler(6),
    marginVertical: scaler(5),
  },
  btnText: {color: '#fff', fontWeight: 'bold'},
  previewImage: {
    width: scaler(100),
    height: scaler(100),
    marginVertical: scaler(10),
    borderRadius: scaler(8),
  },
  saveBtn: {
    backgroundColor: '#28a745',
    padding: scaler(15),
    borderRadius: scaler(8),
    alignItems: 'center',
    marginTop: scaler(10),
  },
  saveBtnText: {color: '#fff', fontWeight: 'bold', fontSize: scaler(16)},
  error: {color: 'red', fontSize: scaler(12), marginTop: scaler(2)},
});
