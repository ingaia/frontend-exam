import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Modal,
    CloseModal,
    VideoContainer,
    ResponsiveIframe,
} from './styles';

export default function PlayItem({ id, thumb, title, videoId }) {
    return (
        <>
            <Container href={`#${id}`} thumb={thumb}>
                <div>{title}</div>
            </Container>
            <Modal id={`${id}`}>
                <CloseModal href="#fechar" title="Fechar">
                    CLOSE
                </CloseModal>
                <VideoContainer>
                    <ResponsiveIframe
                        title={title}
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </VideoContainer>
            </Modal>
        </>
    );
}

PlayItem.propTypes = {
    id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
};
