import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  img {width: 20%};


  @media(max-width: 1330px) {
    img {width: 25%};

  }

  @media(max-width: 950px) {
    img {width: 35%};

  }

  @media(max-width: 680px) {
    img {width: 45%};

  }

  @media(max-width: 550px) {
    img {width: 52%};

  }

  @media(max-width: 430px) {
    img {width: 60%};

  }

  @media(max-width: 360px) {
    img {width: 68%};

  }

`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >div:not(:first-child) {
    margin-bottom: 50px;
  }

  @media(max-width: 340px) {
    input {width: 200px };
  }

`;
