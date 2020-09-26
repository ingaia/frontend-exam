import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { device } from '../../styles/devices';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;

  @media ${device.tabletS} {
    grid-template-columns: 100%;
    }
`;

export const Sidenav = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid ${darken(0.2, '#A99E7E')};

  @media ${device.tabletS} {
    height: 20vh;
    padding-top: 40px;
    }
  

  img{
    width: 80%;
    height: 24%;
    align-self: center;
    margin-bottom: 130px;

    @media ${device.laptopM} {
      height: 22%;
    }
   
    @media ${device.tabletM} {
      width: 80%;
      height: 15%;
    }
    @media ${device.tabletS} {
      width: 35%;
      height: 70%;
      margin-bottom: 20px;

    }
  }
  > button {
    color: #fff;
    background: transparent;
    border: none;
    font-size: 16px;
    padding: 20px;
    margin-bottom: 10px;
    width: 60%;
    align-self: center;
    transition: 0.3s ease-in-out;
    
    @media ${device.tabletS}{
      width: 30%;
      padding: 10px;
      font-size: 16px;
      margin-bottom: 0;

    }
    @media ${device.mobileS} {
      font-size: 14px;
    }

  &:active {
  transform: translateY(5px);
  transition: all 0.3s ease-in-out;
  }

  &:hover {
  transition: 0.7s ease-in-out;
  color: ${darken(0.1, "#A99E7E")};
  box-shadow: 0px 0px 37px 10px rgba(0,0,0,0.85);
  }

  &:focus {
    border: 1px solid #A99E7E;
    color: #A99E7E;
    outline: none;
  }
  .loading-icon {
        animation: ${rotate} 2s infinite;
      }
}
  
`;

export const ContentBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tabletM} {
    height: 100vh;
  }
  @media ${device.tabletS} {
    height: 80vh;
  }
`;

export const VideosBox = styled.div`
  overflow-y: scroll;
  display:grid;
  height:90%;
  width: 90%;
  grid-template-columns: 1fr 1fr;
  padding: 30px 30px;
  grid-gap: 5%;
  box-shadow: 0px 0px 50px 70px rgba(0,0,0,0.8);
  background: transparent;

  @media ${device.laptopS} {
    grid-template-columns: 1fr;
  }
  @media ${device.mobileS} {
    width: 100%;
    padding: 30px 15px;
    margin: 0 auto;
    row-gap: 5%;
    column-gap: 0;
  }
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

  #button-img{
    border: 1px solid #A99E7E;
    background: #000; 
    position: relative;
    box-shadow: 0px 0px 30px 70px rgba(0,0,0,0.6);
    transition: 1s ease-in-out;
    width: 100%;
    
    @media ${device.mobileS} {
      width: 92%;
  }

    img {
    width: 100%;
    height: 80%;

    }
    #title-box{
      background: #000;
      box-shadow: 0px 0px 30px 70px rgba(0,0,0,0.6);
      
      p {
        padding: 10px;
        font-size: 18px;
        border: none;
        color: #fff;
      }
    }

    &:active {
    transform: translateY(5px);
    transition: all 0.3s;
    }

    &:hover {
    transition: 0.7s ease-in-out;
    border: 1px solid ${darken(0.3, "#A99E7E")};
    }
 }
  
  
`;

export const LoadMoreButton = styled.button`
  background: transparent;
  border: 1px solid #A99E7E;
  padding: 20px 10px;
  color: #A99E7E;
  width: 300px;
  height: 60px;
  margin: 0 auto;
  font-size: 16px;
  align-self: center;
  box-shadow: 0px 0px 30px 20px rgba(0,0,0,0.5);
  outline: none;
  transition: 0.7s ease-in-out;

  &:active {
  transform: translateY(5px);
  transition: all 0.3s;
  }

  &:hover {
  transition: 0.7s ease-in-out;
  color: ${darken(0.2, "#A99E7E")};
  border: 1px solid ${darken(0.2, "#A99E7E")};
  width: 320px;
  height: 70px;
  font-size: 20px;
  box-shadow: 0px 0px 37px 30px rgba(0,0,0,0.85);
  
  }
  .loading-icon {
        animation: ${rotate} 2s infinite;
      }
`;

export const VideoFrame = styled.div`
  position: absolute;
  left: 20%;
  top: 15%;
  width: 60%;
  height: 60%;

  #frame-box{
    border: 1px solid #A99E7E;
    box-shadow: 0px 0px 0px 99999px rgba(29, 26, 26, 1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  z-index: 1;
  top: -15%;
  right: -20%;
  display: flex;
  color: #FFF;
  background: transparent;
  border: none;
  align-items: center;
  font-size: 24px;
  transition: 1s ease-in-out;

  &:active {
  transform: translateY(5px);
  transition: all 0.3s;
  }

  &:hover {
  transition: 0.7s ease-in-out;
  color: ${darken(0.2, "#FFF")};
  font-size: 28px;
  }

  p {
    margin-left: 5px;
  }
`;