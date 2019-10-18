import React, { Component } from 'react';
import logoDark from '../assets/images/logo_dark.png';
import Loading from './Loading';
import {withRouter} from 'react-router-dom';

import '../styles/Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      username: '',
      password: '',
      loader: true,
      error: false
    }
  }

  doLoading = () => {
    if(this.state.loader) {
      let overlay = document.getElementById("loading-overlay");
      setTimeout(() => overlay.classList.add("hide"), 4000);
    }
  }


  componentDidMount() {
    document.getElementsByTagName("BODY")[0].classList.add("login-page");
    document.getElementsByTagName("BODY")[0].classList.remove("intern-page");
    this.doLoading();
  }

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  doLogin = () => {
    if (this.state.username.length > 0  && this.state.password.length > 0) {
      this.setState({ logged: true });
      document.getElementsByTagName("BODY")[0].classList.add("intern-page");
      return this.props.history.push('/intern');
    } else {
        this.setState({ error: true });
    }
  }

  render() {
    return (
      <section className="login-container">
          <div className="login-overlay"></div>
          <div className="form-container">
            <img src={logoDark} alt="Logo The Witcher 3"/>
            <form className="login-form" onSubmit={e => e.preventDefault(e)}>
              <fieldset>
                <label>
                    {
                        this.state.username.length > 0 &&
                        <p>Email</p>
                    }
                    <input className="login-username"
                    placeholder="Email"
                    onChange={this.handleChangeUsername} 
                    value={this.state.username} />
                </label>

                <label>
                    {
                        this.state.password.length > 0 &&
                        <p>Password</p>
                    }
                    <input className="login-username"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChangePassword} 
                    value={this.state.password} />
                </label>

                <p className={this.state.error ? "error-message" : "error-message hidden"}>Preencha os dois campos com alguma informação</p>

                <button onClick={this.doLogin}>Login</button>
              </fieldset>
            </form>
          </div>
          <Loading />
      </section>
    );
  }
}

export default withRouter(Login);