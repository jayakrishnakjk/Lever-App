import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from 'react-native-paper';
import AppNav from './AppNav';
import AuthNav from './AuthNav';
import LoginScreen from '../screens/LoginScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Nav = () => {
	const [token, setToken] = useState('');

	const getToken = async () => {
		const value = await AsyncStorage.getItem('token');
		console.log('token', value);
		setToken(value);
		return;
	};

	getToken();

	const theme = {
		...DefaultTheme,
		// Specify custom property
		myOwnProperty: true,
		// Specify custom property in nested object
		colors: {
			...DefaultTheme.colors,
			primary: '#243b7f',
			secondary: '#757a82',
		},
	};
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				{token ? <AppNav /> : <AuthNav />}
			</NavigationContainer>
		</PaperProvider>
	);
};

export default Nav;

const styles = StyleSheet.create({});
