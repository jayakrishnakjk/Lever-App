import { StyleSheet, View, Text } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import { MD3LightTheme as DefaultTheme, PaperProvider, } from 'react-native-paper';

const App = () => {

	const theme = {
		...DefaultTheme,
		// Specify custom property
		myOwnProperty: true,
		// Specify custom property in nested object
		colors: {
			...DefaultTheme.colors,
			primary: "#243b7f",
			secondary: "#757a82",
		  },
	};
	return (
		<PaperProvider theme={theme}>
			<LoginScreen />
		</PaperProvider>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
