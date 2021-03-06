import { connect } from 'react-redux';
import { login, logout, signup, clearErrors, faceLogin } from '../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ( { session }, { formType }) => {
  return ({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    formType: formType
  }

);
};

const mapDispatchToProps = (dispatch, { formType }) => {
  const processForm = (formType === "login") ? login : signup;

  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    faceLogin: user => dispatch(faceLogin(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
