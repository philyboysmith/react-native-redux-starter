import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import axios from 'axios';
import { AppLoading } from 'expo';

import { AppNavigator } from './navigation/AppNavigator';
import configureStore from './configureStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, store: configureStore(() => this.setState({ loading: false })) };
  }

  async componentWillMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading, store } = this.state;
    if (!loading) {
      return (
        <Provider store={store}>
          <ReduxNetworkProvider pingInterval={1000} pingInBackground>
            <AppNavigator />
          </ReduxNetworkProvider>
        </Provider>
      );
    }
    return <AppLoading />;
  }
}
