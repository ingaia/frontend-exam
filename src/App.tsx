import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';
import ToastContainer from './styles/Toast';


function App() {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer

      />
    </Router>
  );
}

export default App;
