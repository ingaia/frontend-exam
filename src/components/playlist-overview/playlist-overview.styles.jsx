import styled, { css } from 'styled-components';

export const OverviewContainer = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px 50px;
  margin-top: 50px;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(76, 175, 80, 0.1);
    border: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #a99e7e;
    border: 1px solid #a99e7e;
    border-radius: 10px;
  }

`;
const flexStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ThumbnailContainer = styled.div`
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
    height: 35px;
    width: 100%;
    ${flexStyles}

    background: rgba(0,0,0,0.6);
  }
`;
