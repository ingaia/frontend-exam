import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #1d1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ToggleWrapper = styled.span`
    cursor: pointer;
    display: inline-block;
    height: 5rem;
    position: relative;
    width: 5rem;

    /* svg animations */
    @keyframes changeColor1 {
        0% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        25% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        50% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        75% {
            fill: #ff3509;
            stroke: #ff3509;
        }
        100% {
            fill: #ff3509;
            stroke: #ff3509;
        }
    }
    @keyframes changeColor2 {
        0% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        25% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        50% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        75% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        100% {
            fill: #ff3509;
            stroke: #ff3509;
        }
    }
    @keyframes changeColor3 {
        0% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        25% {
            fill: #4c4c4c;
            stroke: #4c4c4c;
        }
        50% {
            fill: #ff3509;
            stroke: #ff3509;
        }
        75% {
            fill: #ff3509;
            stroke: #ff3509;
        }
        100% {
            fill: #ff3509;
            stroke: #ff3509;
        }
    }
    .svg-1 {
        #f {
            animation: changeColor1 3s;
            animation-fill-mode: forwards;
        }
        #s {
            animation: changeColor2 3s;
            animation-fill-mode: forwards;
        }
        #t {
            animation: changeColor3 3s;
            animation-fill-mode: forwards;
        }
    }
    svg {
        height: 100%;
        overflow: visible;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
    }
`;
