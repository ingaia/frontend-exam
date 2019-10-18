import React, { Component } from 'react';
import Login from './components/Login.js';
import Intern from './components/Intern.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/Main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/intern" component={Intern} />
        </Switch>
      </Router>
    )
  }
}

export default App;
