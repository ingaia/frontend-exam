// Tools
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import SignIn from './components/sign-in/sign-in.component';

// Styles
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
