import styled, { css } from 'styled-components';

const signInStyles = css`
  width: 105px;
  height: 40px;
`;

const getButtonStyles = (props) => {
  if (props.isSignIn) {
    return signInStyles;
  }
};

const Button = styled.button`
  background: transparent;
  border: 1px solid #a99e7e;
  color: #a99e7e;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${getButtonStyles}
`;

export default Button;
