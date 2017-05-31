import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Box from './box.jsx';
import configureStore from './store/store';
import { signup, login } from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    window.signup = signup;
    window.login = login;

    const root = document.getElementById('root');
    ReactDOM.render(<Box />, root);

    window.store = configureStore();
});
