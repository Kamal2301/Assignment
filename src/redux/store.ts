import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import roleReducer from './roleSlice';
import auditReducer from './auditSlice';
import {Audit} from './types';

const rootReducer = combineReducers({
  role: roleReducer,
  audit: auditReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['role', 'audit'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type RootState = {
  role: {
    role: string | null;
  };
  audit: {
    audits: Audit[];
  };
};
