import React from 'react';

import { PlayListConainer, SideMenu, Menu } from '~/components';
import { Container } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <SideMenu />
            <Menu />
            <PlayListConainer />
        </Container>
    );
}
