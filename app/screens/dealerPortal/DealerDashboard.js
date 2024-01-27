import { StyleSheet, View, Text } from 'react-native';

const DealerDashboard = () => {
	console.log('Dealer dashboard');
	return (
		<View style={styles.container}>
			<Text>DealerDashboard</Text>
		</View>
	);
};

export default DealerDashboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
