import React from "react";
import {
  ContainerVideoBlock,
  ContainerVideoBlockImage,
  VideoLabel,
} from "./style";

function VideoBlock({
  title,
  thumbnail,
}: {
  title: string;
  thumbnail: string;
}) {
  console.log(title);
  return (
    <ContainerVideoBlock background={thumbnail}>
      <ContainerVideoBlockImage background={thumbnail}>
        <VideoLabel>{title}</VideoLabel>
      </ContainerVideoBlockImage>
    </ContainerVideoBlock>
  );
}
export default VideoBlock;
