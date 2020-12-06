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
  key,
}: {
  title: string;
  idVideo: string;
  thumbnail: string;
  tooglePopup: (x: string) => void;
  key: number;
}) {
  const tooglePopupRequest = () => {
    tooglePopup(idVideo);
  };
  return (
    <ContainerVideoBlock
      key={key}
      onClick={tooglePopupRequest}
      background={thumbnail}
    >
      <ContainerVideoBlockImage background={thumbnail}>
        <VideoLabel>{title}</VideoLabel>
      </ContainerVideoBlockImage>
    </ContainerVideoBlock>
  );
}
export default VideoBlock;
