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
  isMobile,
}: {
  title: string;
  idVideo: string;
  thumbnail: string;
  tooglePopup: (x: string) => void;
  isMobile: boolean;
}) {
  const tooglePopupRequest = () => {
    if (isMobile) {
      window.open(`https://youtu.be/${idVideo}`);
    } else {
      tooglePopup(idVideo);
    }
  };
  return (
    <ContainerVideoBlock className="video" onClick={tooglePopupRequest}>
      <ContainerVideoBlockImage background={thumbnail}>
        <VideoLabel>{title}</VideoLabel>
      </ContainerVideoBlockImage>
    </ContainerVideoBlock>
  );
}
export default VideoBlock;
