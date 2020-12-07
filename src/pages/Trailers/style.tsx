import styled from "styled-components";
import { devicesMax } from "../../assets/global_style";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
`;
const Sidebar = styled.div`
  align-items: center;
  display: flex;
  flex: ${(props) => (props.sidebarStatus ? "100%" : "33%")};
  flex-direction: column;
  border-right: 1px solid #4c4c4c;
  height: 100%;
  @media ${devicesMax.mobileL} {
    display: ${(props) => (props.sidebarStatus ? "flex" : "none")};
  }
`;
const PlayListContainer = styled.div`
  display: flex;
  flex: 75%;
  align-items: center;
  background: rgb(0, 0, 1);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 1, 1) 0%,
    rgba(0, 0, 0, 0.5284488795518207) 30%
  );

  height: 100%;
  width: 100%;
  flex-direction: column;

  @media ${devicesMax.mobileL} {
    display: ${(props) => (props.sidebarStatus ? "none" : "flex")};
    flex: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 1, 1) 0%,
      rgba(0, 0, 0, 0.5284488795518207) 0%
    );
  }
`;
const PlayListContainerItens = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
`;
const ContainerButtonMobile = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 16px;
`;
const ContainerErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  p {
    color: ${(props) => props.theme.primary};
  }
`;
const ContainerLoadMore = styled.div`
  display: flex;
  flex: 1 0 40%;
  flex-direction: column;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 160px;
  align-items: center;
`;

export {
  Container,
  Sidebar,
  PlayListContainer,
  PlayListContainerItens,
  ContainerButtonMobile,
  ContainerErrorMessage,
  ContainerLoadMore,
};
