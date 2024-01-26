import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label('Username'),
	password: Yup.string().required().label('Password'),
});

const LoginScreen = () => {
	const globalStles = require('../../styles');
	return (
		<View style={styles.container}>
			{/* logo and titles */}
			<View style={{ alignItems: 'center' }}>
				<Image
					style={{ width: 70, height: 90, marginBottom: 10 }}
					source={require('../../assets/lever-auto-logo.png')}
				/>
				<Text style={globalStles.mainHeading}>
					Welcome to the Lever Auto Portal
				</Text>
				<Text style={globalStles.commonParaText}>
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
							value={values.username}
							mode="outlined"
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
							placeholder="Password"
							secureTextEntry
							value={values.password}
							mode="outlined"
							right={<TextInput.Icon icon="eye" />}
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

						<Button
							style={globalStles.defaultButton}
							rippleColor={'#000000'}
							mode="contained"
							onPress={handleSubmit}
						>
							Sign in
						</Button>
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
