import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {authReducer} from './authSlice';
import {hrAuthReducer} from './hrAuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkinReducer} from './checkInSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  hrAuth: hrAuthReducer,
  checkIn: checkinReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
