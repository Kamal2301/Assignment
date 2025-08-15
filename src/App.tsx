import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/store';
import AppNavigator from './Navigation/StackNavigation/AppNavigator';

function App() {
  const style = {flex: 1};

  return (
    <GestureHandlerRootView style={style}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
              <StatusBar
                barStyle={'dark-content'}
                animated={true}
                backgroundColor={'white'}
              />
              <AppNavigator />
            </SafeAreaView>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
