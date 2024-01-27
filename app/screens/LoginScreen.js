import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { TextInput, Button } from 'react-native-paper';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';
import Nav from '../navigation/Nav';

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label('Username'),
	password: Yup.string().required().label('Password'),
});

const Stack = createStackNavigator();

const CreateStackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="nav" component={Nav} />
	</Stack.Navigator>
);

const LoginScreen = () => {
	const navigation = useNavigation();

	const handleLogin = async (val) => {
		const data = {
			email: val.username,
			password: val.password,
			ipAddress: '49.37.158.138',
			macAddres: '',
			isTrusted: true,
			deviceName:
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
		};

		const headers = {
			hostname: 'devc.leverauto.com',
		};

		try {
			const response = await axios.post(
				'https://devc.leverauto.com/auth/api/v1/auth/login',
				data,
				{ headers }
			);

			AsyncStorage.setItem('token', response.data?.token);
			AsyncStorage.setItem('user', JSON.stringify(response.data?.user));
			AsyncStorage.setItem(
				'partner',
				JSON.stringify(response.data?.partner)
			);

			navigation.navigate(nav);
		} catch (err) {
			console.log(err);
		}

		// AsyncStorage.
	};

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
				onSubmit={(val) => handleLogin(val)}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					handleSubmit,
					setFieldTouched,
					touched,
					values,
					errors,
				}) => (
					<View style={{ marginTop: 40 }}>
						<TextInput
							onChangeText={handleChange('username')}
							onBlur={() => setFieldTouched('username')}
							placeholder="Username"
							value={values.username}
							mode="outlined"
							label="Username"
							style={{
								marginBottom: 10,
							}}
							// right={<TextInput.Icon icon="eye" />}
						/>
						{touched.username && (
							<Text style={{ color: 'red' }}>
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
							onBlur={() => setFieldTouched('password')}
							placeholder="Password"
							secureTextEntry
							value={values.password}
							mode="outlined"
							label="Password"
							style={{
								marginBottom: errors.username ? 5 : 10,
							}}
							// right={<TextInput.Icon icon="eye" />}
						/>
						{touched.password && (
							<Text
								style={{
									color: 'red',
									// marginBottom: touched.password ? 0 : 10,
								}}
							>
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
							rippleColor={'#000'}
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
