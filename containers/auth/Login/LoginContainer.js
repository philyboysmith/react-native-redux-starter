import { connect } from 'react-redux';

import LoginScreen from './LoginScreen';
import { login } from '../../../ducks/auth';

const mapStateToProps = state => {
  const { authenticated, error, loading } = state.auth;
  return { authenticated, error, loading };
};

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

export default LoginContainer;
