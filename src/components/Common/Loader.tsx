import styled from "styled-components";
const Loader = styled.div`
  border: 4px solid ${(props) => props.theme.secondary};
  border-radius: 50%;
  border-top: 4px solid ${(props) => props.theme.primary};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export { Loader };
