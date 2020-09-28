import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.8);

  button {
    color: white;
    background: transparent;
    border: none;
    position: absolute;
    right: 90px;
    top: 45px;
    cursor: pointer
  }
`;
