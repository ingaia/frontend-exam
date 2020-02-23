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

export const FloatInput = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 13px;

    input {
        background: transparent;
        border: 0;
        border-bottom: 1px solid #a99e7e;
        outline: none;
        height: 24px;
        padding: 0;
        color: #fff;
        margin: 0 0 10px;
        font-size: 14px;
        line-height: 16px;
        transition: all 0.3s ease-out;
        border-radius: 0;

        &:focus {
            border-bottom: 1px solid #a99e7e;
        }
        &::placeholder {
            color: transparent;
        }

        &:required:invalid + label {
            color: red;
        }
        &:required:invalid {
            border-bottom: 1px solid red;
        }
        &:required:invalid + label:before {
            content: '*';
        }
        &:focus + label,
        &:not(:placeholder-shown) + label {
            font-size: 14px;
            line-height: 16px;
            margin-top: 0;
            color: #a99e7e;
        }
    }

    label {
        pointer-events: none;
        position: absolute;
        font-size: 14px;
        line-height: 16px;
        top: 0;
        left: 0;
        margin-top: 13px;
        transition: all 0.3s ease-out;
        color: #a99e7e;
    }
`;
