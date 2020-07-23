import styles from './App.module.scss';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './route/Routes';
import Spinner from '../components/spinner';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes />
      </div>
      <Spinner />
    </Router>
  );
}

export default App;
