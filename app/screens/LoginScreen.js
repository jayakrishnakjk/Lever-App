import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
	handleLoginAsync,
	selectIsLoading,
	selectUser,
} from '../redux/authSlice';

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label('Username'),
	password: Yup.string().required().label('Password'),
});

const LoginScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);

	const globalStyles = require('../../styles');

	return (
		<View style={styles.container}>
			{/* logo and titles */}
			<View style={{ alignItems: 'center' }}>
				<Image
					style={{ width: 70, height: 90, marginBottom: 10 }}
					source={require('../../assets/lever-auto-logo.png')}
				/>
				<Text style={globalStyles.mainHeading}>
					Welcome to the Lever Auto Portal
				</Text>
				<Text style={globalStyles.commonParaText}>
					Please Sign-in to your account
				</Text>
			</View>

			{/* login form */}
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={(values) => dispatch(handleLoginAsync(values))}
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
						/>
						{touched.username && (
							<Text style={{ color: 'red' }}>
								{errors.username}
							</Text>
						)}

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
						/>
						{touched.password && (
							<Text style={{ color: 'red' }}>
								{errors.password}
							</Text>
						)}

						<Button
							style={globalStyles.defaultButton}
							rippleColor={'#000'}
							mode="contained"
							onPress={handleSubmit}
							loading={useSelector(selectIsLoading)}
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
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
});
