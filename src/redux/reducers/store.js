import {createStore, applyMiddleware} from 'redux';
//redux-logger
// import {persistReducer, persistStore} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './InfoReducer';
import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

const middleware = [thunk];
// const persistedReducer = persistReducer(persistConfig, reducer);
// export const persistor = persistStore(store);

export const store = createStore(reducer, applyMiddleware(...middleware));
