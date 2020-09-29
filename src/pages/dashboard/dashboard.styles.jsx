import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  @media(max-width: 650px) {
    flex-direction: column;
  }
`;

const FlexStyles = css` 
    display: flex;  
    flex-direction: column;
    align-items: center;
`;

export const MenuContainer = styled.div`
    ${FlexStyles}
    width: 35%; 
    justify-content: flex-start;

    @media(max-width: 650px) {
        height: 30%;
        width: 100%;
    }

`;

export const PlaylistContainer = styled.div`
    ${FlexStyles}
    width: 65%;
    background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1));
    border-left: 1px solid #3a3a3a;

    @media(max-width: 650px) {
        background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1));
        width: 100%;
        overflow: hidden;
    }

`;

export const Menu = styled.div`
    ${FlexStyles};
    img {width: 75%};
    height: 70%;
    justify-content: space-around;

    @media(max-width: 650px) {
        padding: 24px;
        height: 100%;
        img {
            width: 27%;
            margin-bottom: 5px;
        };
    }

    @media(max-width: 445px) {
        img {
            width: 42%;
        };
    }

    
    @media(max-width: 300px) {
        img {
            width: 65%;
        };
    }
`;

export const ButtonsContainer = styled.div`;
    button:first-child {
        margin-bottom: 20px;
    }
    display: flex;
    flex-direction: column;
    width: 55%;

    @media(max-width: 650px) {
        width:65%;
        height: 78px;
    }
    
`;
