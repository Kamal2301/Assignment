import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigation from './Navigation/StackNavigation/AppNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/store';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  const style = {flex: 1};

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={style}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider>
              <SafeAreaView style={{flex: 1, backgroundColor: '#2C278C'}}>
                <StatusBar
                  barStyle={'light-content'}
                  animated={true}
                  backgroundColor={'#3629b7'}
                />
                <AppNavigation />
              </SafeAreaView>
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
