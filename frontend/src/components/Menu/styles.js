import styled from 'styled-components';
import { lighten } from 'polished';

export const MenuTop = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #4c4c4c;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: #000;
    img {
        margin-left: 20px;
        width: 124px;
        height: 77px;
    }

    @media (min-width: 992px) {
        display: none;
    }
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
    }

    button {
        width: 154px;
        height: 39px;
        background: transparent;
        border: 1px solid #a99e7e;
        font-size: 14px;
        line-height: 16px;
        color: #a99e7e;
        transition: background 0.2s;
        margin: 10px 10px;

        &:hover {
            background: ${lighten(0.9, 'rgba(255, 255, 255, 0.1)')};
        }
    }

    span {
        font-size: 14px;
        line-height: 16px;
        color: #fff;
        &:hover {
            cursor: pointer;
        }
    }
`;
