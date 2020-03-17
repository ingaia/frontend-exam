import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Logo.module.scss';

const Logo = (props) => {

    const { image, alt, className } = props;

    return (
        <img
            src={image}
            className={classnames(styles.Logo, className)}
            alt={alt}
        />
    );
}
 
Logo.propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string
}

Logo.defaultProps = {
    className: '',
    alt: 'Not defined',
}

export default Logo;