import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PlayItem({ thumb, title }) {
    return (
        <Container thumb={thumb}>
            <div>{title}</div>
        </Container>
    );
}

PlayItem.propTypes = {
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
