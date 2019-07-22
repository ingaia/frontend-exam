import BackgroundImg from '../images/background.png'

const SIZE = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px"
};

const device = {
	mobileS: `(min-width: ${SIZE.mobileS})`,
	mobileM: `(min-width: ${SIZE.mobileM})`,
	mobileL: `(min-width: ${SIZE.mobileL})`,
	tablet: `(min-width: ${SIZE.tablet})`,
	laptop: `(min-width: ${SIZE.laptop})`,
	laptopL: `(min-width: ${SIZE.laptopL})`,
	desktop: `(min-width: ${SIZE.desktop})`,
	desktopL: `(min-width: ${SIZE.desktop})`
};

const bg = {
	defaultColor: `red`,
	coverImage: `${BackgroundImg}`,
};

const palette = {
	primary: '#a99e7e',
	dark: '#000000',
	darkLight: '#1d1a1a',
	white: '#ffffff',
	gray: '#c9c9c9',
	blood: '#c9141e'
};

export default { device, bg, palette }