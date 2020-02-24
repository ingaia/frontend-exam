import React from 'react';

import PlayItem from '~/components/PlayItem';
import { Container, Menu, Content, VideoList, LoadMore } from './styles';

import logo from '~/assets/logo_dark.png';

export default function Dashboard() {
    return (
        <Container>
            <Menu>
                <img src={logo} alt="logo" width={274} height={137} />
                <button type="button">TRAILERS</button>
                <span>LOGOUT</span>
            </Menu>
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
        </Container>
    );
}
