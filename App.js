import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Nav from './app/navigation/Nav';
import store from './app/redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Nav />
			</NavigationContainer>
		</Provider>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
