import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Sidebar,
  PlayListContainer,
  PlayListContainerItens,
  ContainerButtonMobile,
  ContainerErrorMessage,
  ContainerLoadMore,
} from "./style";
import { ContainerVideoBlockEmpty } from "../../components/TrailersList/VideoBlock/style";
import Logo from "../../components/Common/Logo/Logo";
import Button from "../../components/Common/Button/Button";
import VideoBlock from "../../components/TrailersList/VideoBlock/VideoBlock";
import VideoPopup from "../../components/TrailersList/VideoPopup/VideoPopup";
import VideoApi from "../../service/route";
import { AppContext } from "../../store/context";
import { TrailerInterface } from "../../types/trailer";
import { Loader } from "../../components/Common/Loader";
import useWindowDimensions from "../../hooks/windowHook";
function Trailers() {
  useEffect(() => {
    getTrailers();
  }, []);
  const { width } = useWindowDimensions();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [idVideo, setIdVideo] = useState("");
  const [trailersTotal, setTrailersTotal] = useState(0);
  const [trailerNextPageToken, setTrailerNextPageToken] = useState("");
  const [trailersState, setTrailers] = useState<TrailerInterface[]>([]);
  const { setLogin, setPassword, setEmail } = useContext(AppContext);

  //control side bar on mobile
  const [sidebar, setSidebar] = useState(false);
  const toogleSideBar = () => {
    setSidebar(!sidebar);
  };
  const getTrailers = async (pageToken = "") => {
    setLoading(true);
    const trailers = await VideoApi(pageToken);
    if (trailers.error) {
      setErrorMessage(trailers.error.message);
      setError(true);
      setLoading(false);
    } else {
      setErrorMessage("");
      setError(false);
      setTrailersTotal(trailers.pageInfo.totalResults);
      setTrailerNextPageToken(trailers.nextPageToken);
      setTrailers([...trailersState, ...trailers.items]);
      setLoading(false);
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
  console.log(trailersState);
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
          {error ? (
            <ContainerErrorMessage>
              <p>{errorMessage}</p>
              <Button
                onClick={() => getTrailers}
                noMargin
                longButton
                label={"Try Again"}
              />
            </ContainerErrorMessage>
          ) : (
            trailersState.map((trailer: TrailerInterface, index: number) => (
              <VideoBlock
                isMobile={width < 450 ? true : false}
                key={index}
                idVideo={trailer.snippet.resourceId.videoId}
                tooglePopup={tooglePopup}
                thumbnail={trailer.snippet.thumbnails.standard.url}
                title={trailer.snippet.title}
              />
            ))
          )}
          {loading ? (
            <ContainerLoadMore>
              <Loader />
            </ContainerLoadMore>
          ) : trailersState.length < trailersTotal ? (
            <ContainerLoadMore>
              <Button
                onClick={() => getTrailers(trailerNextPageToken)}
                noMargin
                label={"LOAD MORE"}
              />
            </ContainerLoadMore>
          ) : trailersState.length % 2 === 0 ? null : (
            <ContainerVideoBlockEmpty />
          )}
        </PlayListContainerItens>
      </PlayListContainer>
    </Container>
  );
}
export default Trailers;
