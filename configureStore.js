import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';

import { createNetworkMiddleware, offlineActionTypes, checkInternetConnection } from 'react-native-offline';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { middleware } from './navigation/AppNavigator';

const networkMiddleware = createNetworkMiddleware();

const config = {
  key: 'alpha-1',
  storage: ExpoFileSystemStorage,
};

const pReducer = persistReducer(config, rootReducer);

// // const persistor = persistStore(store);

export default function configureStore(callback) {
  const store = createStore(pReducer, applyMiddleware(networkMiddleware, thunk, middleware));

  persistStore(store, null, () => {
    // After rehydration completes, we detect initial connection
    checkInternetConnection().then(isConnected => {
      store.dispatch({
        type: offlineActionTypes.CONNECTION_CHANGE,
        payload: isConnected,
      });
      callback(); // Notify our root component we are good to go, so that we can render our app
    });
  });

  return store;
}
