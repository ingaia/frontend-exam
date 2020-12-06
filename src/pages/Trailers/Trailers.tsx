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
import { TrailerInterface } from "../../types/trailer";
function Trailers() {
  useEffect(() => {
    getTrailers();
  }, []);
  const [error, setError] = useState(false);
  const [trailers, setTrailers] = useState<TrailerInterface[]>([]);
  const { setLogin, setPassword, setEmail } = useContext(AppContext);

  //control side bar on mobile
  const [sidebar, setSidebar] = useState(false);
  const toogleSideBar = () => {
    setSidebar(!sidebar);
  };
  const getTrailers = async () => {
    const trailers = await VideoApi();
    console.log(trailers);
    if (trailers.error) {
    } else {
      setTrailers(trailers.items);
    }
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
          {trailers.map((trailer: TrailerInterface, index: number) => (
            <VideoBlock
              thumbnail={trailer.snippet.thumbnails.standard.url}
              title={trailer.snippet.title}
            />
          ))}
        </PlayListContainerItens>
      </PlayListContainer>
    </Container>
  );
}
export default Trailers;
