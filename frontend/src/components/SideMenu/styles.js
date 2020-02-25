import styled from 'styled-components';
import { lighten } from 'polished';

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 423px;
    border-right: 1px solid #4c4c4c;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    img {
        margin-top: 100px;
    }

    button {
        width: 254px;
        height: 39px;
        background: transparent;
        margin-top: 130px;
        border: 1px solid #a99e7e;
        font-size: 14px;
        line-height: 16px;
        color: #a99e7e;
        transition: background 0.2s;

        &:hover {
            background: ${lighten(0.9, 'rgba(255, 255, 255, 0.1)')};
        }
    }

    span {
        margin-top: 30px;
        font-size: 14px;
        line-height: 16px;
        color: #fff;
        &:hover {
            cursor: pointer;
        }
    }
    @media (max-width: 992px) {
        display: none;
    }
`;
