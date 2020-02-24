import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { videosRequest } from '~/store/modules/videos/actions';

import PlayItem from '../PlayItem';
import { Content, VideoList, LoadMore } from './styles';
import store from '~/store';

export default function PlayListConainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        const { pageToken } = store.getState().videos;
        dispatch(videosRequest(pageToken));
    });

    return (
        <Content>
            <VideoList>
                <PlayItem
                    thumb="https://i.ytimg.com/vi/XGx5iMbufio/hq720.jpg"
                    title="titulo do video"
                />
                <PlayItem
                    thumb="https://i.ytimg.com/vi/XGx5iMbufio/hq720.jpg"
                    title="titulo do video"
                />
                <PlayItem
                    thumb="https://i.ytimg.com/vi/XGx5iMbufio/hq720.jpg"
                    title="titulo do video"
                />
                <PlayItem
                    thumb="https://i.ytimg.com/vi/XGx5iMbufio/hq720.jpg"
                    title="titulo do video"
                />
                <PlayItem
                    thumb="https://i.ytimg.com/vi/XGx5iMbufio/hq720.jpg"
                    title="titulo do video"
                />
                <LoadMore>
                    <button type="button">LOAD MORE</button>
                </LoadMore>
            </VideoList>
        </Content>
    );
}
