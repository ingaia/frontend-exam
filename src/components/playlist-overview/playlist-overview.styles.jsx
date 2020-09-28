import styled from 'styled-components';

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
    border: 1px solid #a99e7e
    border-radius: 10px;
  }

`;

export const ThumbnailContainer = styled.div`
  width: 390px;
  height: 250px;

  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
  }
`;
