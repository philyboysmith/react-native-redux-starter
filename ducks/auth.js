import axios from 'axios';

import { API_ENDPOINT } from 'react-native-dotenv';

// Types

const LOG_IN = 'app/auth/LOG_IN';
const LOG_IN_SUCCESS = 'app/auth/LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'app/auth/LOG_IN_FAILURE';
const LOG_OUT = 'app/auth/LOG_OUT';

// Action Creators

// Reducers
const initialState = {
  authenticated: false,
  loading: false,
  error: null,
  mode: null,
};

export const login = ({ data }) => dispatch => {
  dispatch({ type: LOG_IN });
  axios
    .post(`${API_ENDPOINT}/login`, data)
    .then(response => {
      dispatch({ type: LOG_IN_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: LOG_IN_FAILURE, payload: error.response.data });
    });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, loading: true, error: null };

    case LOG_OUT:
      return initialState;

    case LOG_IN_SUCCESS:
      return { ...state, loading: false, authenticated: true, error: null, mode: action.payload.AppMode };

    case LOG_IN_FAILURE:
      return { ...state, authenticated: false, loading: false, error: action.payload, mode: null };
    default:
      return state;
  }
};
