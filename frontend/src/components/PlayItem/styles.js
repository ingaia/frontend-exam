import styled, { css } from 'styled-components';

export const Container = styled.a`
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

export const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(29, 26, 26, 0.9);
    z-index: 99999;
    opacity: 0;
    transition: opacity 400ms ease-in;
    pointer-events: none;
    &:target {
        opacity: 1;
        pointer-events: auto;
    }
`;

export const CloseModal = styled.a`
    position: absolute;
    width: 30px;
    top: 30px;
    right: 40px;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    color: #fff;
`;

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ResponsiveIframe = styled.iframe`
    width: 902px;
    height: 534px;
    @media (max-width: 992px) {
        width: 640px;
        height: 480px;
    }
    @media (max-width: 768px) {
        width: 480px;
        height: 360px;
    }
    @media (max-width: 576px) {
        width: 320px;
        height: 180px;
    }
`;
