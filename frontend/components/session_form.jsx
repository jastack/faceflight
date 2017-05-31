import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearErrors = this.clearErrors.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
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
		this.props.processForm(user).then(this.props.closeModal);
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
		if (this.props.formType === 'login') {
			return (
					<input type="submit" value="Sign in" />
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


	render() {
		return (
			<div className="login-form-container">
					<div className="box">
						<header className="head">
							<img src="http://res.cloudinary.com/dopv3qpj7/image/upload/v1496209211/plane_u4vmfh.svg"></img>
						</header>

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
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
