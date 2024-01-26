import {
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label('Username'),
	password: Yup.string().required().label('Password'),
});

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			{/* logo and titles */}
			<View style={{ alignItems: 'center' }}>
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
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={(val) => console.log(val)}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					handleSubmit,
					handleBlur,
					values,
					errors,
				}) => (
					<View style={{ marginTop: 40 }}>
						<TextInput
							onChange={handleChange('username')}
							onBlur={handleBlur('username')}
							placeholder="Username"
							placeholderTextColor="#867A91"
							value={values.username}
							style={{
								borderColor: '#867A91',
								borderRadius: 10,
								borderWidth: 1,
								fontSize: 18,
								height: 40,
								marginBottom: errors.username ? 5 : 20,
								paddingHorizontal: 10,
							}}
						/>
						{errors.username && (
							<Text style={{ color: 'red', marginBottom: 10 }}>
								{errors.username}
							</Text>
						)}
						{/* <Text
							onPress={() =>
								console.log('Forgot username clicked')
							}
							style={{
								color: '#243b7f',
								fontSize: 14,
								alignSelf: 'flex-end',
								marginBottom: 16,
							}}
						>
							Forgot User Name?
						</Text> */}

						<TextInput
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							placeholderTextColor="#867A91"
							placeholder="Password"
							secureTextEntry
							value={values.password}
							style={{
								fontSize: 18,
								paddingHorizontal: 10,
								height: 40,
								// paddingVertical: 10,
								borderWidth: 1,
								borderColor: '#867A91',
								marginBottom: errors.password ? 5 : 20,
								borderRadius: 10,
							}}
						/>
						{errors.password && (
							<Text style={{ color: 'red', marginBottom: 10 }}>
								{errors.password}
							</Text>
						)}
						{/* <Text
							onPress={() =>
								console.log('orgot password clicked')
							}
							style={{
								color: '#243b7f',
								fontSize: 14,
								alignSelf: 'flex-end',
								marginBottom: 16,
							}}
						>
							Forgot Password?
						</Text> */}
						<TouchableOpacity
							onPress={handleSubmit}
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
				)}
			</Formik>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: 30,
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
});
