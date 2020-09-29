import styled, { css } from 'styled-components';

const flexStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  ${flexStyles}

  img {
    width: 100%;
    height: 100%;
    margin: auto;
    display: block;
    border: 1px solid #a99e7e;
  }

  span {
    color: white;
    position: absolute;
    bottom: 0;
    height: 40px;
    width: 100%;
    margin-left: 1px;
    ${flexStyles}

    background: rgba(0,0,0,0.6);

    @media(max-width: 341px) {
      height: 62px;
      font-size: 13px;
    }
  }
`;

export default ThumbnailContainer;
