import React from 'react';
import {
	ButtonLogoutMain,
	ButtonTrailerMain,
	MainBoxStyled,
	MainStyled,
	MainVideoListStyled,
	VideoListStyled
} from './styled';
import Background from '../../components/Background/Background';
import LogoDark from '../../assets/images/logo_dark.png';
import CardVideo from "../../components/CardVideo/CardVideo";

const Main = ({history}) => {
	const doLogout = () => {
		localStorage.removeItem('authToken');
		history.push(`/login`);
	};

	return (
		<Background>
		<MainStyled>
			<MainBoxStyled>
				<img src={LogoDark} alt={`Logo`}/>
				<div>
						<ButtonTrailerMain
							type="button"
							variant="contained"
							name={'trailers'}
							value={'trailers'}
							text={'trailers'}/>
				</div>
				<div>
					<ButtonLogoutMain
						type="logout"
						variant="logout"
						name={'logout'}
						value={'logout'}
						text={'logout'}
						onClick={doLogout} />
				</div>
			</MainBoxStyled>
			<MainVideoListStyled>
					<VideoListStyled>
						<CardVideo text={'Título do filme'}/>
						<CardVideo text={'Título do filme'}/>
						<CardVideo text={'Título do filme'}/>
						<CardVideo text={'Título do filme'}/>
						<CardVideo text={'Título do filme'}/>
						<CardVideo text={'Título do filme'}/>
					</VideoListStyled>
			</MainVideoListStyled>
		</MainStyled>
		</Background>
	);
};

export default Main;