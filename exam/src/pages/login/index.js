import React, { Component, Fragment } from "react";

import Style from "./style";

import GifWitcher from "./../../assets/img/witcher-logo.gif";
import Logo from "./../../assets/img/logo.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
    test: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ test: !this.state.test });
    }, 1500);
  }

  renderDiv() {
    if (!this.state.test) {
      return (
        <div className="loader">
          <img src={GifWitcher} alt="Logo" />
        </div>
      );
    }
  }

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  inputSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (username) {
      this.setState({
        message: ""
      });

      this.props.history.push("/trailers");
    } else {
      this.setState({
        message: "Preencha seu e-mail"
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div>{this.renderDiv()}</div>
        <Style />
        <div className="page-login">
          <div className="area-login">
            <img src={Logo} alt="The Witcher" />

            <div className="area-login__form">
              <form onSubmit={this.inputSubmit}>
                <input
                  type="email"
                  name="username"
                  placeholder="E-mail"
                  value={this.state.username}
                  onChange={this.inputChange}
                />
                <p className="error-login">{this.state.message}</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.inputChange}
                />

                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
