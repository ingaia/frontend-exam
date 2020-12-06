import styled from "styled-components";
import { devicesMin } from "../../../assets/global_style";

const Button = styled.button`
  align-items: center;
  background: transparent;
  margin-top: ${(props) => (props.noMargin ? "0" : "64px")};
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: ${(props) => (props.longButton ? "100px" : "35px")};
  padding-right: ${(props) => (props.longButton ? "100px" : "35px")};
  font-size: 14px;
  font-weight: 400;
  font-family: Roboto Condensed;
  pointer-events: ${(props) => (props.disable ? "none" : "all")};

  border: ${(props) => (props.noBorder ? "none" : "1px solid #c4c4c4")};
  color: ${(props) =>
    props.disable ? props.theme.secondary : props.theme.primary};
  cursor: ${(props) => (props.disable ? "default" : "pointer")};
  ${(props) =>
    props.onlyMobile
      ? `
   @media ${devicesMin.laptopL} {
    display:none;
  }`
      : null};
`;
export { Button };
