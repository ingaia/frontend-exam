import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import loader from './loader.svg';
import styles from './Spinner.module.scss';
import SpinnerService, { GLOBAL_SPINNER } from './SpinnerService';

const Spinner = (props) => {

    const { id } = props;
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const token = SpinnerService.spinner.subscribe(id, (obj, data) => {
            if (obj === id)  
                setIsShow(data);
        });

        return () => {
            SpinnerService.spinner.unsubscribe(token);
        }
    }, [id]);

    return (
        <div className={`${styles.SpinnerOverlay} ${isShow ? styles.show : styles.hide}`}>
            <img src={loader} alt="loader"/>
        </div>
    );
}
 
Spinner.propTypes = {
    id: PropTypes.string
}

Spinner.defaultProps = {
    id: GLOBAL_SPINNER
}

export default Spinner;