import React from 'react';
import { createSwitchNavigator, NavigationActions } from 'react-navigation';

import { BackHandler } from 'react-native';

import { createReduxContainer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { connect } from 'react-redux';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
);

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const ReduxNavigator = createReduxContainer(RootNavigator);

// create nav component
const reduxAppNavigator = class ReduxNavigation extends React.PureComponent {
  // Making the back button work on Android
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { nav, dispatch } = this.props;
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { nav, dispatch } = this.props;
    return <ReduxNavigator state={nav} dispatch={dispatch} />;
  }
};

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppNavigatorWithState = connect(mapStateToProps)(reduxAppNavigator);

const AppNavigator = connect(mapStateToProps)(AppNavigatorWithState);

export { RootNavigator, AppNavigator, middleware };
