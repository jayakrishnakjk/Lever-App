import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedInAsync } from '../redux/authSlice';
import AppNav from './AppNav';
import AuthNav from './AuthNav';

const Nav = () => {
	const token = useSelector((state) => state.auth.token);
	const isLoading = useSelector((state) => state.auth.isLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLoggedInAsync());
	}, []);

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	const theme = {
		...DefaultTheme,
		myOwnProperty: true,
		colors: {
			...DefaultTheme.colors,
			primary: '#243b7f',
			secondary: '#757a82',
		},
	};

	return (
		<PaperProvider theme={theme}>
			{token !== null ? <AppNav /> : <AuthNav />}
		</PaperProvider>
	);
};

export default Nav;
