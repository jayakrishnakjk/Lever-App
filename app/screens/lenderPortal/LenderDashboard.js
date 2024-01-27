import { StyleSheet, View, Text } from 'react-native';

const LenderDashboard = () => {
	return (
		<View style={styles.container}>
			<Text>LenderDashboard</Text>
		</View>
	);
};

export default LenderDashboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
