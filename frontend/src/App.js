import React, { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from './services/history';

import { store, persistor } from './store';

import { Loader } from '~/components';
import GlobalStyle from './styles/global';

const Routes = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./routes')), 3000);
    });
});

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Suspense fallback={<Loader />}>
                        <Routes />
                        <GlobalStyle />
                        <ToastContainer autoClose={3000} />
                    </Suspense>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
