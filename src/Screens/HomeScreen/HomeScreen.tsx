// src/screens/HomeScreen.js
import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IconButton from '../../Components/IconButton';
import {deleteAudit} from '../../redux/auditSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import scaler from '../../Utils/scaler';
import SnackbarHandler from '../../Utils/SnackbarHandler';
import {Audit} from '../../redux/types';

export default function HomeScreen() {
  const role = useSelector(state => state.role.role);
  const audits = useSelector(state => state.audit.list);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  const renderItem = ({item, index}: {item: Audit}) => (
    <View style={styles.auditItem}>
      {item.image ? (
        <Image source={{uri: item.image}} style={styles.auditImage} />
      ) : null}

      <View style={styles.auditDetails}>
        <Text style={styles.title}>Audit: {index + 1}</Text>
        <Text style={styles.timestamp}>
          {new Date(item?.timestamp).toLocaleString()}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.bold}>Ratings</Text> : (Quality :{' '}
          {item?.ratings?.quality}, Efficiency : {item?.ratings?.efficiency},
          Quality : {item?.ratings?.quality} )
        </Text>

        {item.checkboxes?.documentsVerified && (
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Documents Verification : </Text>true
          </Text>
        )}
        {item.checkboxes?.safetyProtocols && (
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Safety Protocols : </Text>true
          </Text>
        )}
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Comments : </Text>
          {item.comments}
        </Text>
      </View>

      {role === 'Admin' && (
        <IconButton
          onPress={() => {
            dispatch(deleteAudit(item.id));
            SnackbarHandler.successToast('Audit deleted');
          }}
          name="delete-outline"
          size={scaler(27)}
          color="red"
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Audits</Text>
        {role === 'Auditor' && (
          <IconButton
            onPress={() => {
              navigation.navigate('CreateAudit');
            }}
            color="white"
            size={scaler(28)}
            name="note-plus-outline"
          />
        )}
      </View>

      {audits.length === 0 ? (
        <Text style={styles.emptyText}>No audits yet</Text>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={audits}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},

  header: {
    backgroundColor: '#0391f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaler(16),
    height: scaler(45),
  },
  headerTitle: {
    fontSize: scaler(21),
    fontWeight: '600',
    color: '#fff',
  },

  listContainer: {
    marginTop: scaler(16),
    paddingHorizontal: scaler(10),
  },

  emptyText: {
    textAlign: 'center',
    marginTop: scaler(20),
    fontSize: scaler(15),
    color: '#888',
  },

  auditItem: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    padding: scaler(10),
    marginBottom: scaler(10),
    borderRadius: 8,
    alignItems: 'flex-start',
  },
  auditImage: {
    width: scaler(90),
    height: scaler(90),
    borderRadius: 8,
  },
  auditDetails: {
    flex: 1,
    marginLeft: scaler(10),
  },
  title: {fontWeight: 'bold', fontSize: scaler(16)},
  timestamp: {fontSize: scaler(12), color: 'gray'},
  infoText: {
    fontSize: scaler(13),
    marginTop: scaler(3),
    color: '#333',
  },
  bold: {fontWeight: '600'},
});
