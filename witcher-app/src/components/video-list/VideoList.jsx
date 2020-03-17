import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button';

import styles from './VideoList.module.scss';

const VideoList = (props) => {

    const { items, onItemClick, nextPage, onNextPageClick } = props;

    const imageStyle = (item) => {
        return {
            backgroundImage: `url(${item.thumbnails.medium.url})`
        }
    }

    return (
        <div className={styles.VideoListContainer}>
            {items.map(item => {
                return (
                    <div
                        key={item.videoId} 
                        className={styles.VideoPreview}
                        style={imageStyle(item)}
                        onClick={() => onItemClick(item.videoId)}
                    >
                        <div className={styles.VideoPreviewDescription}>
                            {item.title}
                        </div>
                    </div>
                )
            })}
            {nextPage 
                ? <div className={styles.VideoListNextButtonContainer}>
                    <Button 
                        label="LOAD MORE" 
                        onClick={onNextPageClick} 
                        className={styles.VideoListNextButton}
                    /> 
                </div> 
                : null
            }
            
        </div>
    );
}
 
VideoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemClick: PropTypes.func.isRequired,
    nextPage: PropTypes.string,
    onNextPageClick: PropTypes.func.isRequired
}

export default VideoList;