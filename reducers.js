import { combineReducers } from 'redux';

import { reducer as network } from 'react-native-offline';

import { createNavigationReducer } from 'react-navigation-redux-helpers';

import { RootNavigator } from './navigation/AppNavigator';

import auth from './ducks/auth';

const nav = createNavigationReducer(RootNavigator);

const rootReducer = combineReducers({ nav, auth, network });

export default rootReducer;
