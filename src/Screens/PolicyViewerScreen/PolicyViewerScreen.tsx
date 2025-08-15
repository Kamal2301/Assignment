// src/screens/PolicyViewerScreen.js
import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import scaler from '../../Utils/scaler';

export default function PolicyViewerScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://www.privacypolicies.com/live/your-policy-url'}}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{marginTop: scaler(20)}}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
