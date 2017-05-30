import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
};

class Login extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <FacebookLogin
    appId="1509388585748949"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />
    );
  }
}

export default Login;
