import styled from "styled-components";
import { devicesMax } from "../../../assets/global_style";

const Input = styled.input`
  align-items: center;
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  margin-bottom: 8px;
  outline: none;
  color: ${(props) => props.theme.primary};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  @media ${devicesMax.mobileL} {
    width: 50vw;
  }
`;
const Label = styled.label`
  color: ${(props) => props.theme.secondary};
  flex: 1;
`;
export { Container, Label, Input };
