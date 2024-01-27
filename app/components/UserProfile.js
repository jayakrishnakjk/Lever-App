import { StyleSheet, View, Text } from 'react-native';

const UserProfile = (props) => {
	return (
		<View style={styles.container}>
			<Text>{props.userDetails.name}</Text>
		</View>
	);
};

export default UserProfile;

const styles = StyleSheet.create({
	container: {},
});
