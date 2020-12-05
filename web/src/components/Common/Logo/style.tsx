import styled from "styled-components";
import { devices } from "../../../assets/global_style";
const Image = styled.img`
  align-items: center;
  max-width: 15vw;
  max-height: 15vh;
  flex: 1;
  margin-bottom: 32px;
  @media ${devices.mobileL} {
    max-width: 50vw;
    max-height: 25vh;
  }
`;
export { Image };
