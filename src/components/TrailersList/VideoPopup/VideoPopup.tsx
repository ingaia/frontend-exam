// @ts-nocheck
import React from "react";
import { ContainerPopup, ContainerButton, ContainerVideo } from "./style";
import { FadeIn } from "../../../assets/global_style";
import Button from "../../Common/Button/Button";

const VideoPopup = ({
  popup,
  idVideo,
  tooglePopup,
}: {
  popup: boolean;
  idVideo: string;
  tooglePopup: (x: string) => void;
}) => {
  const tooglePopupRequest = () => {
    tooglePopup("");
  };
  return (
    <ContainerPopup popupState={popup}>
      <ContainerButton>
        <Button onClick={tooglePopupRequest} noMargin noBorder label="CLOSE" />
      </ContainerButton>
      <FadeIn>
        <ContainerVideo>
          <iframe
            width="902"
            height="534"
            src={"https://www.youtube.com/embed/" + idVideo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ContainerVideo>
      </FadeIn>
    </ContainerPopup>
  );
};
export default VideoPopup;
