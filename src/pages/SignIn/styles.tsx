import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  
  img{
    width: 380px;
    height: 180px;
    margin-bottom: 50px;
  }
  form{
    display: flex;
    flex-direction: column;

    input{
      border: none;
      background: transparent;
      border-bottom: 1px solid #A99E7E;
      margin-bottom: 30px;
      padding: 10px 0;
    
      &::placeholder{
        color:#A99E7E;  
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
  margin: 40px auto;
  font-size: 16px;
  -webkit-box-shadow: 0px 0px 37px 4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 37px 4px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 37px 4px rgba(0,0,0,0.75);
`;
