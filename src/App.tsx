import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
