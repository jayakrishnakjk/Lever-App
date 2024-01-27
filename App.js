import { StyleSheet } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from 'react-native-paper';
import Nav from './app/navigation/Nav';

const App = () => {
	return <Nav />;
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
