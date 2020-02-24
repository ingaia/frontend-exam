import styled, { css } from 'styled-components';

export const Container = styled.div`
    border: 1px solid #a99e7e;
    width: 385px;
    height: 232px;
    margin: 0 20px 20px 0;
    padding: 1px;

    ${props =>
        props.thumb &&
        css`
            background: no-repeat center;
            background-image: url(${props.thumb});
            background-size: cover;
        `}

    &:hover {
        cursor: pointer;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        height: 57px;
        margin-top: 175px;
        color: #fff;
        font-size: 12px;
        line-height: 16px;
    }
`;
