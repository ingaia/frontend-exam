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
import VideoBlock from "../../components/TrailersList/VideoBlock/VideoBlock";
import VideoPopup from "../../components/TrailersList/VideoPopup/VideoPopup";
import VideoApi from "../../service/route";
import { AppContext } from "../../store/context";
import { TrailerInterface } from "../../types/trailer";
function Trailers() {
  useEffect(() => {
    getTrailers();
  }, []);
  const [error, setError] = useState(false);
  const [popup, setPopup] = useState(false);
  const [idVideo, setIdVideo] = useState("");
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
  const tooglePopup = (idVideo: string) => {
    setPopup(!popup);
    setIdVideo(idVideo);
  };
  const Logout = () => {
    setEmail("");
    setPassword("");
    setLogin(false);
  };
  return (
    <Container>
      <VideoPopup tooglePopup={tooglePopup} popup={popup} idVideo={idVideo} />
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
              idVideo={trailer.snippet.resourceId.videoId}
              tooglePopup={tooglePopup}
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
