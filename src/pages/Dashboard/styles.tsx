import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;
export const Sidenav = styled.nav`
  
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid ${darken(0.2, '#A99E7E')};

  img{
    width: 380px;
    height: 180px;
    align-self: center;
    margin-bottom: 130px;
  }
  button {
    color: #fff;
    background: transparent;
    border: none;
    font-size: 16px;
    padding: 20px;
    margin-bottom: 10px;
    width: 60%;
    align-self: center;

    &:focus {
      border: 1px solid #A99E7E;
      color: #A99E7E;
      outline: none;
    }
  }
  
`;

export const ContentBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideosBox = styled.div`
  overflow-y: scroll;
  display:grid;
  height:90%;
  width: 90%;
  grid-template-columns: 1fr 1fr;
  padding: 30px 30px;
  grid-gap: 5%;
  box-shadow: 0px 0px 20px 70px rgba(0,0,0,0.6);
  background: transparent;

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #A99E7E;
    border-color: #000;
    border-width: 2px 9px 2px 9px;
    border-style: solid;
    
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${darken(0.15, '#A99E7E')}; 
    border-color: #000;
    border-style: solid;
    border-width: 2px 7px 2px 7px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: ${darken(0.25, '#A99E7E')};
  }

  /* &::-webkit-scrollbar{
    width: 8px;
    background-color: #A99E7E;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track{
	border-radius: 20px;
  background-color: #A99E7E;
  }

  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: ${darken(0.15, '#A99E7E')}; 
  }

  &::-webkit-scrollbar-thumb:hover{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: ${darken(0.25, '#A99E7E')};
  }
 */
  img {
    width: 100%;
    height: 320px;
    border: 1px solid #A99E7E; 
    box-shadow: 0px 0px 40px 50px rgba(0,0,0,0.6);
  }
  
`;
export const LoadMoreButton = styled.button`
  background: transparent;
  border: 1px solid #A99E7E;
  padding: 20px 10px;
  color: #A99E7E;
  width: 300px;
  margin: 0 auto;
  font-size: 16px;
  align-self: center;
  box-shadow: 0px 0px 30px 20px rgba(0,0,0,0.5);
`;