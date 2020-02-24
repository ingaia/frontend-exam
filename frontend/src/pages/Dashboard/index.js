import React from 'react';

import { PlayListConainer, SideMenu } from '~/components';
import { Container } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <SideMenu />
            <PlayListConainer />
        </Container>
    );
}
