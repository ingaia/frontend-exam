import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
    }
`;
