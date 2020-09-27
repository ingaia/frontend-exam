import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 25px
`;

export const Label = styled.label`
  position: absolute;
  left: 0px;
  top: 15px;
  color: #746d5a; 
  transition: all 0.2s;
`;

export const Input = styled.input`
  background: transparent !important;
  border: none;
  border-bottom: 1px solid #a99e7e;
  color: white !important;
  height: 40px;
  width: 295px;


  &::-webkit-input-placeholder{ visibility: hidden; }

  &:not(:focus){
    &:not(:placeholder-shown){
      +label { 
        top: -12px;
        font-size: 12px;
      }
    }
  }
  &:focus {
    outline: none;

    +label {
      top: -12px;
      font-size: 12px;
      transform: translate(0, 0) scale(1);
    }
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus{
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white !important;
  }
`;
