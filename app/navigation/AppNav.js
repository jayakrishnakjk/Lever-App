import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import DealerDashboard from '../screens/dealerPortal/DealerDashboard';
import LenderDashboard from '../screens/lenderPortal/LenderDashboard';

const Stack = createStackNavigator();

const AppNav = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<Stack.Navigator
			initialRouteName={
				user?.role === 'Dealer' || user?.role === 'Dealer Admin'
					? 'DealerDashboard'
					: 'LenderDashboard'
			}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="DealerDashboard" component={DealerDashboard} />
			<Stack.Screen name="LenderDashboard" component={LenderDashboard} />
		</Stack.Navigator>
	);
};

export default AppNav;
