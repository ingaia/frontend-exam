import styled from 'styled-components';

const LoadingContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1d1a1a;


    svg {
      height: 15%;
      width: 100%;
      path{
        transition: all .5s ease-in;
      }

      &.first-stage path.left {
        fill: red;
      }
      &.second-stage path.middle {
        fill: red;
      }
      &.third-stage path.right {
        fill: red;
      }

    }
`;

export default LoadingContainer;
