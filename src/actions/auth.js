import {
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  CLEAR_PROFILE,
  LOGOUT,
} from './types';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';

axios.defaults.baseURL = 'https://sc-backend-v0.herokuapp.com';

// TODO:
// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    // setAuthToken
    setAuthToken(localStorage.token);
  }

  try {
    // This will hit api route to get user data from User model
    // finds user data for id req.user.id
    // const res = await axios.get('/api/auth');
    const res = {};

    // Calls redux reducer that sets the user/logged in club id in app state
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// TODO:
// Register User
export const register = ({
  name,
  email,
  password,
  tags,
  app_required,
  new_members,
}) => async (dispatch) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const body = JSON.stringify({
    name,
    email,
    password,
    tags,
    'app-required': app_required,
    'new-members': new_members,
  });

  try {
    // Once we have routes, it will create a new user on backend
    // and will return signed jwt
    let res = await axios.post('/api/user/register', body, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });

    console.log(res);
    // // Load user into app state
    // dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};

// TODO:
// Login User
export const login = (email: null, password: null, history) => async (
  dispatch
) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log('logging in');

  const body = JSON.stringify({ email, password });

  try {
    // Once we have routes, it will create a new user on backend
    // and will return signed jwt
    let res = await axios.post('/api/user/login', body, config);
    console.log(res);

    // Calls redux reducer that puts the token into local storage
    // and token and isAuthenticated=true in app state
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });

    history.push('/admin');
  } catch (err) {
    console.log(err);
  }
};

// TODO:
// Logout / clear profile
export const logout = (history) => (dispatch) => {
  // this will push back to dashboard
  // will need to connect logout component with import { withRouter } from 'react-router'
  history.push('/');
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

// TODO:
// Forgot password
