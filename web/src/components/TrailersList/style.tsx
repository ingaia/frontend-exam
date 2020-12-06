import styled from "styled-components";
import { devicesMax } from "../../assets/global_style";
const ContainerVideoBlock = styled.div`
  flex: 1 0 25%; /* explanation below */
  height: 100px;
  padding: 32px;
  margin: 32px;
  border: 1px double ${(props) => props.theme.secondary};
`;
export { ContainerVideoBlock };
