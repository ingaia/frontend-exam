import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  img{
    width: 380px;
    height: 180px;
    margin-bottom: 50px;
  }
  form{
    display: flex;
    flex-direction: column;

    > div{
        position: relative;
        width: 100%;
        height: 60px;
        line-height: 44px;
        transition: 0.2s;

        label {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: #A99E7E;
          transition: 0.2s;
          cursor: text;
        }

        input{
          border: 0;
          background: transparent;
          border-bottom: 1px solid #A99E7E;
          margin-bottom: 30px;
          padding: 0.5rem 0;
          width: 100%;
          color: #FFF;

          &:invalid {
            outline: 0;
          }
          &:focus,
          &:valid {
            border-color: #00dd22;
          }
          &:focus~label,
          &:valid~label
           {
            font-size: 14px;
            top: -24px;
            color: #00dd22;
          }
      }
  } 
}
`;
export const SubmitButton = styled.button`
  background: transparent;
  border: 1px solid #A99E7E;
  padding: 15px 10px;
  color: #A99E7E;
  width: 120px;
  height: 50px;
  margin: 40px 0;
  font-size: 16px;
  letter-spacing: 1px;
  align-self: center;
  -webkit-box-shadow: 0px 0px 37px 4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 37px 4px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 37px 4px rgba(0,0,0,0.75);
  transition: 0.7s ease-in-out;

  &:active {
  transform: translateY(5px);
  transition: all 0.3s;
  }

  &:hover {
  transition: 0.7s ease-in-out;
  color: ${darken(0.2, "#A99E7E")};
  border: 1px solid ${darken(0.2, "#A99E7E")};
  width: 140px;
  height: 60px;
  font-size: 18px;
  box-shadow: 0px 0px 37px 30px rgba(0,0,0,0.85);
  }



`;
