import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../components/button';

import styles from './NotFound.module.scss';
import AuthService from '../../services/AuthService';

const NotFound = (props) => {

    const buttonLabel = () => {
        return AuthService.isLogged() ? 'HOME' : 'LOGIN';
    }

    return (
        <div className={styles.NotFoundContainer}>
            <h1>404 - Not found</h1>
            <Button 
                label={buttonLabel()}
                className={styles.NotFoundBackButton} 
                onClick={() => props.history.push('/home')}
            />
        </div>
    );
}
 
export default withRouter(NotFound);