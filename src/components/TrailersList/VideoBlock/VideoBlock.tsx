import React from "react";
import {
  ContainerVideoBlock,
  ContainerVideoBlockImage,
  VideoLabel,
} from "./style";

function VideoBlock({
  title,
  idVideo,
  thumbnail,
  tooglePopup,
}: {
  title: string;
  idVideo: string;
  thumbnail: string;
  tooglePopup: (x: string) => void;
}) {
  const tooglePopupRequest = () => {
    tooglePopup(idVideo);
  };
  return (
    <ContainerVideoBlock onClick={tooglePopupRequest}>
      <ContainerVideoBlockImage background={thumbnail}>
        <VideoLabel>{title}</VideoLabel>
      </ContainerVideoBlockImage>
    </ContainerVideoBlock>
  );
}
export default VideoBlock;
