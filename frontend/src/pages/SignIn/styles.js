import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    input {
        background: transparent;
        border: 0;
        border-bottom: 1px solid #a99e7e;
        height: 24px;
        padding: 0;
        color: #fff;
        margin: 0 0 10px;
        font-size: 14px;
        line-height: 16px;
        &::placeholder {
            color: #a99e7e;
            font-size: 14px;
            line-height: 16px;
        }
    }

    button {
        width: 106px;
        height: 39px;
        background: rgba(255, 255, 255, 0);
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
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
