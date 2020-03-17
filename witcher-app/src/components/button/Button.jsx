import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.module.scss';

const Button = (props) => {

    const { label, className, onClick } = props;

    return (
        <button 
            { ...props }
            className={classnames(styles.Button, className)}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
 
Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    className: 'Button',
    onClick: () => {},
}

export default Button;