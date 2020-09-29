import styled from 'styled-components';

export const OverviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 50px;
  overflow-y: scroll;
  height: 100%;

  >div:not(.modal-container) {
    width: 45%;
    flex-grow: 1;
    height: 35%;
    min-height: 120px;
    margin: 0 15px 15px;
    justify-content: space-between;
    text-align: center;

    @media(max-width: 1085px) {
      width: 40%;
    }

    @media(max-width: 935px) {
      width: 45%;
      height: 47%;
    }

    
    @media(max-width: 650px) {
      width: 40%;
    };

    @media(max-width: 525px) {
      width: 44%;
      height: 60%;
    }

    @media(max-width: 341px) {
      height: 40%;
    }
  }

  >div:last-child {
    justify-content: center
  }

  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-track-piece{
    background: #a99e7e;
    border-right: 2px solid rgb(0,0,0,0);
    border-left: 2px solid rgb(0,0,0,0);
    background-clip: content-box;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #a99e7e;
    border-radius: 10px;
   
  }

`;

export const LoadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 35%;

    @media(max-width: 1076px) {
      width : 55%;
    }

    @media(max-width: 316px) {
      width : 65%;
    }
  }
`;
