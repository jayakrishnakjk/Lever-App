import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const LoginScreen = () => {
	const globalStles = require('../../styles')
	return (
		<View style={styles.container}>
			{/* logo and titles */}
			<View style={{ alignItems: 'center', marginTop: 80 }}>
				<Image
					style={{ width: 70, height: 90, marginBottom: 10 }}
					source={require('../../assets/lever-auto-logo.png')}
				/>
				<Text
					style={globalStles.mainHeading}
				>
					Welcome to the Lever Auto Portal
				</Text>
				<Text style={globalStles.commonParaText}>
					Please Sign-in to your account
				</Text>
			</View>

			{/* login form */}
			<View style={{ marginTop: 40 }}>
				<TextInput
					mode="outlined"
					label="Username"
					placeholder="Username"
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
					mode="outlined"
					label="Password"
					secureTextEntry
					right={<TextInput.Icon icon="eye" />}
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

				<Button style={globalStles.defaultButton} rippleColor={'#000000'} mode="contained" onPress={() => console.log('Pressed')}>
					Sign in
				</Button>
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
