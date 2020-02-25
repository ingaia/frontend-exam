import styled from 'styled-components';
import { lighten } from 'polished';

export const Content = styled.div`
    background: linear-gradient(90deg, #000, rgba(0, 0, 0, 0));
    width: 100%;
    @media (max-width: 992px) {
        max-height: calc(100% - 108px);
    }
`;

export const VideoList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 40px 40px 0;
    overflow-y: scroll;
    @media (max-width: 992px) {
        margin: 20px 20px 0 50px;
        max-height: calc(100% - 40px);
    }
`;

export const LoadMore = styled.div`
    width: 385px;
    height: 232px;
    margin: 0 20px 20px 0;
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 254px;
        height: 39px;
        background: transparent;
        border: 1px solid #a99e7e;
        font-size: 14px;
        line-height: 16px;
        color: #a99e7e;
        transition: background 0.2s;

        &:hover {
            background: ${lighten(0.9, 'rgba(255, 255, 255, 0.1)')};
        }
    }
`;
