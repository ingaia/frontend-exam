import React, {useState, useEffect} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import theme from '../assets/themes';
import {ThemeProvider} from "styled-components";
import Main from '../containers/Main/Main';
import Login from '../containers/Login/Login';
import Loader from "../components/Loader/Loader";

const AppRoute = () => {
	const [isLoading, setLoading] = useState(true);

	useEffect(()=> {
		//Fake loading
		setTimeout(() => {
			setLoading(false)
		},3000);
	},[]);

	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route {...rest} render={props => (
			localStorage.getItem('authToken')
				? <Component {...props} />
				: <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
		)} />
	);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				{ isLoading ? <Loader/> :
					<Switch>
						<Route path="/login" exact component={Login}/>
						<PrivateRoute path="/home" component={Main}/>
						<PrivateRoute path="*" component={Main}/>
					</Switch>
				}
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default AppRoute;
