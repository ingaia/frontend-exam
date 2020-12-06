import styled from "styled-components";
const ContainerPopup = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #1d1a1a;
  z-index: 2;
  display: ${(props) => (props.popupState ? "inline" : "none")};
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin: 4px;
`;
const ContainerVideo = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-end;
  margin-top: 10%;
  > iframe {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.51);
  }
`;
export { ContainerPopup, ContainerButton, ContainerVideo };
