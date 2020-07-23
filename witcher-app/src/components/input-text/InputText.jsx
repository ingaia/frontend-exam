import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './InputText.module.scss';

const InputText = (props) => {

    const { id, type, placeholder, value, onChange, className } = props

    return (
        <input 
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={classnames(styles.InputText, className)}
        />
    );
}
 
InputText.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
}

InputText.defaultProps = {
    type: 'text',
    className: '',
}

export default InputText;