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
      <div id="outer-box">
        <div id="box">
          <h2>Hi! Welcome to FaceFlight</h2>
          <FacebookLogin
            appId="1509388585748949"
            autoLoad={false}
            size="small"
            fields="name,email,picture"
            callback={responseFacebook} />
        </div>
      </div>
    );
  }
}

export default Login;
