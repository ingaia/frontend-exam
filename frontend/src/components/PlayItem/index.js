import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Modal,
    CloseModal,
    VideoContainer,
    ResponsiveIframe,
} from './styles';

export default function PlayItem({ id, thumb, title, videoId }) {
    const [showIframe, setShowIframe] = useState(false);

    function handlerShowIframe() {
        setShowIframe(!showIframe);
    }
    return (
        <>
            <Container
                href={`#${id}`}
                thumb={thumb}
                onClick={handlerShowIframe}
            >
                <div>{title}</div>
            </Container>
            {console.tron.log()}
            {showIframe ? (
                <Modal id={`${id}`}>
                    <CloseModal
                        href="#fechar"
                        title="Fechar"
                        onClick={handlerShowIframe}
                    >
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
            ) : null}
        </>
    );
}

PlayItem.propTypes = {
    id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
};
