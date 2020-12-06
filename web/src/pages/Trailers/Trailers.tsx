import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Sidebar,
  PlayListContainer,
  PlayListContainerItens,
  ContainerButtonMobile,
} from "./style";
import Logo from "../../components/Common/Logo/Logo";
import Button from "../../components/Common/Button/Button";
import VideoBlock from "../../components/TrailersList/VideoBlock";
import VideoApi from "../../service/route";
import { AppContext } from "../../store/context";
function Trailers() {
  useEffect(() => {
    getTrailers();
  }, []);
  const [error, setError] = useState(false);
  const [trailers, setTrailers] = useState([]);
  const { setLogin, setPassword, setEmail } = useContext(AppContext);

  //control side bar on mobile
  const [sidebar, setSidebar] = useState(false);
  const toogleSideBar = () => {
    setSidebar(!sidebar);
  };
  const getTrailers = async () => {
    const trailers = await VideoApi();
    console.log(trailers);
  };
  const Logout = () => {
    setEmail("");
    setPassword("");
    setLogin(false);
  };
  return (
    <Container>
      <Sidebar sidebarStatus={sidebar}>
        <Logo />
        <Button
          longButton
          onClick={toogleSideBar}
          disable={sidebar ? false : true}
          label="TRAILERS"
        />
        <Button onClick={Logout} noBorder label="LOGOUT" />
      </Sidebar>
      <PlayListContainer sidebarStatus={sidebar}>
        <ContainerButtonMobile>
          <Button
            onClick={toogleSideBar}
            onlyMobile
            noMargin
            longButton
            label="MENU"
          />
        </ContainerButtonMobile>
        <PlayListContainerItens>
          <VideoBlock />
          <VideoBlock />
          <VideoBlock />
          <VideoBlock />
          <VideoBlock />
          <VideoBlock />
        </PlayListContainerItens>
      </PlayListContainer>
    </Container>
  );
}
export default Trailers;
