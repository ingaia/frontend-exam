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
  background: transparent;
  border: none;
  border-bottom: 1px solid #a99e7e;
  color: white;
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
`;
