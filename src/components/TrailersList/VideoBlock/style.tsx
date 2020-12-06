import styled from "styled-components";
import { devicesMax } from "../../../assets/global_style";
const ContainerVideoBlock = styled.div`
  display: flex;
  flex: 1 0 40%;
  flex-direction: row;
  height: 232px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 80px;
  border: 1px solid ${(props) => props.theme.secondary};
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  @media ${devicesMax.mobileL} {
    flex: 1 0 80%;
    margin: 16px;
  }
`;
const ContainerVideoBlockImage = styled.div`
  border: 1px solid #131313;

  flex-direction: row;
  display: flex;
  flex: 1;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  background-position: 0px;
  height: 230px;
`;

const VideoLabel = styled.div`
  flex: 1;
  align-self: flex-end;
  text-align: center;
  color: ${(props) => props.theme.primary};
  background-color: black;
  padding: 8px;
  opacity: 0.7;
`;
export { ContainerVideoBlock, ContainerVideoBlockImage, VideoLabel };
