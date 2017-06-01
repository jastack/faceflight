import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Box from './box.jsx';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout, face_login } from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.face_login = face_login;


  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);

});
