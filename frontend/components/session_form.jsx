import React from 'react';
import { Link, withRouter } from 'react-router';
import FacebookLogin from 'react-facebook-login';



class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", formType: "login", facebook: false, facebookName: "blank" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearErrors = this.clearErrors.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
    this.processForm = this.processForm.bind(this);
    this.signup = this.signup.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }


  responseFacebook(response){
    const username = response.name;
    const user = {username: username};
    this.setState({facebookName: username});
    this.setState({facebook: true});
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
      this.props.login(user);
    } else {
      this.props.signup(user);
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

  renderSignUp(){
    if (this.state.formType === 'login'){
      return(
        <div className="sign-up">
          <h2>Don't have an account?</h2>
          <button onClick={this.signup}> Sign up.</button>
        </div>
      );
    } else {
      return(
        <div className="sign-up">
          <h2>Already have an account?</h2>
          <button onClick={this.login}> Log in.</button>
        </div>
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

  login(e){
    e.preventDefault();
    this.setState({formType: "login"});
  }

  renderPage(){
    if (!this.state.facebook){
      return (
        <div className="main">
          <div className="box">
            <h2>Welcome {this.state.username}</h2>
            <button onClick={this.props.logout}>Log out</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main">
          <div className="box">
            <h2>Welcome {this.state.facebookName}</h2>
            <button onClick={this.logout}>Log out</button>
          </div>
        </div>
      );
    }
  }

  logout(){
    if (this.state.facebook) {
      this.setState({facebook: false});
    } else {
      this.props.logout;
    }
  }

  renderForm(){
    if (!this.props.loggedIn && this.state.facebook === false){
      return(
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
              callback={this.responseFacebook} />
  				</div>

          {this.renderSignUp()}
  			</div>
      </div>
    );
    } else {
      return(
        <div>
          {this.renderPage()}
        </div>
      );
    }
  }


	render() {

		return (
      <div>
        {this.renderForm()}
      </div>
		);
	}

}

export default withRouter(SessionForm);
