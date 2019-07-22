import styled from 'styled-components';
import Button from "../../components/Button/Button";

export const LoginStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 35vh;
	
	& img {
		max-width: 300px;
		margin-bottom: 1em;
	}
`;


export const ButtonLogin = styled(Button)`
  margin-top: 3em;
  text-transform: uppercase;
`;