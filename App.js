import { StyleSheet, View, Text } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';

const App = () => {
	return (
		<View style={styles.container}>
			<LoginScreen />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
