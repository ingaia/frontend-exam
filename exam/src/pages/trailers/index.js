import React, { Component, Fragment } from "react";
import axios from "axios";

import Video from "./../../components/video";

import Style from "./style";

import GifWitcher from "./../../assets/img/witcher-logo.gif";
import logo from "./../../assets/img/logo.png";

class Login extends Component {
  state = {
    test: false,
    trailers: [],
    limit: 6
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ test: !this.state.test });
    }, 1500);

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&part=snippet,id&maxResults=30&key=AIzaSyB2doePdLJ1DjFHj9PqiEpstVCDePd--AI`
    );

    this.setState({ trailers: response.data.items });
  }

  logout = e => {
    this.props.history.push("/");
  };

  loadMore = e => {
    this.setState({
      limit: this.state.limit + 6
    });
  };

  renderDiv() {
    if (!this.state.test) {
      return (
        <div className="loader">
          <img src={GifWitcher} alt="Logo" />
        </div>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <div>{this.renderDiv()}</div>
        <Style />
        <div className="page-trailers">
          <div className="page-trailers__left">
            <img src={logo} alt="The Witcher" />

            <div className="menu-trailers">
              <button className="active">Trailers</button>
              <button className="logout" onClick={this.logout}>
                Logout
              </button>
            </div>
          </div>

          <div className="page-trailers__right">
            {this.state.trailers.slice(0, this.state.limit).map(item => (
              <Video key={item.id} video={item} />
            ))}
            {this.state.limit <= 20 ? (
              <button className="btn__load" onClick={this.loadMore}>
                Load More
              </button>
            ) : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
