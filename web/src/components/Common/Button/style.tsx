import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  background: transparent;
  margin-top: 64px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 35px;
  padding-right: 35px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #c4c4c4;
  color: ${(props) => props.theme.primary};
`;
export { Button };
