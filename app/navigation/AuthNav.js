import { StyleSheet, View, Text } from 'react-native';

const AuthNav = () => {
	return (
		<View style={styles.container}>
			<Text>AuthNav</Text>
		</View>
	);
};

export default AuthNav;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
