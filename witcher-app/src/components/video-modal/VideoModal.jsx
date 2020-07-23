import PropTypes from 'prop-types';
import React from 'react';

import styles from './VideoModal.module.scss';

const Modal = (props) => {

    const { videoId, onClose } = props;

    return (
        !videoId
            ? null
            : <div className={styles.ModalOverlay}>

                <div className={styles.ModalClose} onClick={onClose}>CLOSE</div>

                <div className={styles.Modal}>
                    <iframe 
                        title="video"
                        src={`https://www.youtube.com/embed/${videoId}?start=1`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
    );
}
 
Modal.propTypes = {
    isShow: PropTypes.bool,
    videoId: PropTypes.string,
    onClose: PropTypes.func.isRequired,
}

Modal.defaultProps = {
    isShow: false,
}

export default Modal;