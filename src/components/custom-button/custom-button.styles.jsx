import styled, { css } from 'styled-components';

const signInStyles = css`
  width: 105px;
`;

const logOutStyles = css`
  border: none;
  color: white;
`;

const getButtonStyles = (props) => {
  if (props.isSignIn) {
    return signInStyles;
  }
  if (props.isLogOut) {
    return logOutStyles;
  }
};

const Button = styled.button`
  background: transparent;
  border: 1px solid #a99e7e;
  color: #a99e7e;
  cursor: pointer;
  height: 40px;


  &:focus {
    outline: none;
  }

  ${getButtonStyles}
`;

export default Button;
