import React from 'react';
import { Link, withRouter } from 'react-router';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
};

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", formType: "login" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearErrors = this.clearErrors.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
    this.processForm = this.processForm.bind(this);
    this.signup = this.signup.bind(this);
  }



	clearErrors(){
		this.props.clearErrors();
	}


	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.processForm(user);
	}

  processForm(user){
    if (this.state.formType === "login") {
      console.log("got here!");
      this.props.login(user);
    } else {
      console.log("not quite ready");
    }
  }


	renderErrors() {
		if (this.props.errors) {
			return(
				<ul>
					{this.props.errors.map((error, i) => (
						<li key={`error-${i}`}>
							{error}
						</li>
					))}
				</ul>
			);
		} else {
			return (<div></div>);
		}
	}

	renderSubmit(){
		if (this.state.formType === 'login') {
			return (
					<input type="submit" value="Log In" />
			);
		} else {
			return (
				<input type="submit" value="Sign up" />
			);
		}
	}


	guestLogin(e){
		e.preventDefault();
		this.props.login({username: "Harry", password: "password1"}).then(this.props.closeModal);
	}

  signup(e){
    e.preventDefault();
    this.setState({formType: "signup"});
  }


	render() {
    console.log(this.props);
		return (
      <div className="main">
			  <div className="login-form-container">
					<div className="box">
							<img src="http://res.cloudinary.com/dopv3qpj7/image/upload/v1496209211/plane_u4vmfh.svg"></img>

					<form onSubmit={this.handleSubmit} className="login-form-box">
						<ul>
							{this.renderErrors()}
						</ul>
							<br/>
								<br />
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input"
									placeholder="Username" />
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input"
									placeholder="Password"/>
							<div className="buttons">
								{this.renderSubmit()}
							</div>
					</form>
          <div className="line">
            <hr /> <p>or</p> <hr />
          </div>
          <FacebookLogin
            appId="1509388585748949"
            autoLoad={false}
            size="small"
            fields="name,email,picture"
            cssClass="my-facebook-button-class"
            icon="fa-facebook-official"
            textButton="Log in with Facebook"
            callback={responseFacebook} />
				</div>

        <div className="sign-up">
          <h2>Don't have an account?</h2>
          <button onClick={this.signup}> Sign up.</button>
        </div>
			</div>
    </div>
		);
	}

}

export default withRouter(SessionForm);