import React from 'react';

import { ReactComponent as LoaderSvg } from '~/assets/loader.svg';
import { Container, ToggleWrapper } from './styles';

export default function Loader() {
    return (
        <Container>
            <ToggleWrapper>
                <LoaderSvg className="svg-1" />
            </ToggleWrapper>
        </Container>
    );
}
