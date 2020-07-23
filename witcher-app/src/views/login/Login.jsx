import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/images/logo_dark.png';
import Button from '../../components/button';
import InputText from '../../components/input-text';
import Logo from '../../components/logo';
import AuthService from '../../services/AuthService';
import styles from './Login.module.scss';

const INITIAL_CREDENTIALS = {
    email: '',
    password: ''
}

const Login = (props) => {

    const { history } = props;

    const [credentials, setCredentials] = useState(INITIAL_CREDENTIALS);
    
    const handleInputs = (event) => {
        setCredentials({
            ...credentials,
            [event.target.id]: event.target.value
        });
    }

    const hasValidCredential = () => {
        return credentials.email && credentials.password;
    }

    const doLogin = () => {
        if (hasValidCredential()) {
            AuthService.doLogin(credentials.email);
            history.push('/home');
        }
    }

    const hasCredentials = () => {
        return credentials.email && credentials.password;
    }

    return (
        <div className={styles.login}>

            <Logo 
                image={logo} 
                className={styles.logo}
                alt="The Witcher Wild Hunt logo"
            />

            <div className={styles.fields}>
                <InputText 
                    id="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleInputs}
                />
                
                <InputText 
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleInputs}
                />
            </div>

            <Button 
                label="LOGIN" 
                className={styles.loginButton}
                onClick={doLogin}
                disabled={!hasCredentials()}
            />

        </div>
    );
}
 
Login.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(Login);