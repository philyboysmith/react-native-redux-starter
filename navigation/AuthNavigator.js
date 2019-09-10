import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';

import LoginContainer from '../containers/auth/Login/LoginContainer';
import ReminderContainer from '../containers/auth/Reminder/ReminderContainer';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginContainer,
  },
  Reminder: {
    screen: ReminderContainer,
  },
});

export default AuthNavigator;
