import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import { videosRequest } from '~/store/modules/videos/actions';

import PlayItem from '../PlayItem';
import { Content, VideoList, LoadMore } from './styles';
import { store } from '~/store';

export default function PlayListConainer() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.videos.loading);
    const videos = useSelector(state => state.videos.videos);

    const [infosVideos, setInfosVideos] = useState(videos);

    useEffect(() => {
        const { pageToken } = store.getState().videos;
        dispatch(videosRequest(pageToken));
    }, [dispatch]);

    useEffect(() => {
        setInfosVideos(videos);
    }, [videos]);

    function handlerMore() {
        const { pageToken } = store.getState().videos;
        dispatch(videosRequest(pageToken));
    }
    return (
        <Content>
            <VideoList>
                {infosVideos.map(info => (
                    <PlayItem
                        key={info.id}
                        thumb={info.thumbnails}
                        title={info.title}
                    />
                ))}
                <LoadMore>
                    {loading ? (
                        <Loader type="TailSpin" color="#A99E7E" />
                    ) : (
                        <button type="button" onClick={handlerMore}>
                            LOAD MORE
                        </button>
                    )}
                </LoadMore>
            </VideoList>
        </Content>
    );
}
