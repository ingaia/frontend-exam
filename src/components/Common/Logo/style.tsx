import styled from "styled-components";
import { devicesMax } from "../../../assets/global_style";
const Image = styled.img`
  align-items: center;
  max-width: 15vw;
  max-height: 15vh;
  flex: 1;
  margin-top: 186px;

  margin-bottom: 32px;
  @media ${devicesMax.mobileL} {
    max-width: 50vw;
    max-height: 20vh;
  }
`;
export { Image };
