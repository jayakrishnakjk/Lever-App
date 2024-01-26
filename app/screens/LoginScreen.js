import {
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			{/* logo and titles */}
			<View style={{ alignItems: 'center', marginTop: 80 }}>
				<Image
					style={{ width: 70, height: 90, marginBottom: 10 }}
					source={require('../../assets/lever-auto-logo.png')}
				/>
				<Text
					style={{ color: '#111111', fontSize: 20, marginBottom: 7 }}
				>
					Welcome to the Lever Auto Portal
				</Text>
				<Text style={{ color: '#757a82', fontSize: 12 }}>
					Please Sign-in to your account
				</Text>
			</View>

			{/* login form */}
			<View style={{ marginTop: 40 }}>
				<TextInput
					placeholder="Username"
					placeholderTextColor="#867A91"
					style={{
						fontSize: 18,
						paddingHorizontal: 10,
						height: 40,
						// paddingVertical: 10,
						borderWidth: 1,
						borderColor: '#867A91',
						marginBottom: 10,
						borderRadius: 10,
					}}
				/>

				<Text
					onPress={() => console.log('Forgot username clicked')}
					style={{
						color: '#243b7f',
						fontSize: 14,
						alignSelf: 'flex-end',
						marginBottom: 16,
					}}
				>
					Forgot User Name?
				</Text>

				<TextInput
					placeholder="Password"
					placeholderTextColor="#867A91"
					secureTextEntry
					style={{
						fontSize: 18,
						paddingHorizontal: 10,
						height: 40,
						// paddingVertical: 10,
						borderWidth: 1,
						borderColor: '#867A91',
						marginBottom: 10,
						borderRadius: 10,
					}}
				/>
				<Text
					onPress={() => console.log('orgot password clicked')}
					style={{
						color: '#243b7f',
						fontSize: 14,
						alignSelf: 'flex-end',
						marginBottom: 16,
					}}
				>
					Forgot Password?
				</Text>

				<TouchableOpacity
					style={{
						backgroundColor: '#243B7F',
						height: 36,
						borderRadius: 10,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={{ color: '#ffffff' }}>Sign in</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30,
		paddingHorizontal: 20,
	},
});
