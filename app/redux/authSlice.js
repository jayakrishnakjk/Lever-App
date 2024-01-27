import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
	token: null,
	isLoading: false,
	user: null,
};

export const selectIsLoading = (state) => state.auth.isLoading;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
		resetAuthState: () => initialState,
	},
});

export const { setToken, setIsLoading, setUser, resetAuthState } =
	authSlice.actions;

export const handleLoginAsync = (val) => async (dispatch) => {
	dispatch(setIsLoading(true));

	const info = {
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
			info,
			{ headers }
		);

		dispatch(setUser(response.data.user));
		dispatch(setToken(response.data.token));
		AsyncStorage.setItem('token', response.data.token);
		AsyncStorage.setItem('user', JSON.stringify(response.data.user));
		dispatch(setIsLoading(false));
	} catch (err) {
		console.log(err);
		dispatch(setIsLoading(false));
	}
};

export const handleLogoutAsync = () => async (dispatch) => {
	dispatch(setIsLoading(true));
	dispatch(resetAuthState());
	AsyncStorage.removeItem('token');
	AsyncStorage.removeItem('user');
	dispatch(setIsLoading(false));
};

export const isLoggedInAsync = () => async (dispatch) => {
	try {
		dispatch(setIsLoading(true));
		let storedUser = await AsyncStorage.getItem('user');
		let storedToken = await AsyncStorage.getItem('token');

		storedUser = JSON.parse(storedUser);

		if (storedUser) {
			dispatch(setUser(storedUser));
			dispatch(setToken(storedToken));
		}

		dispatch(setIsLoading(false));
	} catch (error) {
		console.log('isLoggedIn Error ', error);
	}
};

export default authSlice.reducer;
