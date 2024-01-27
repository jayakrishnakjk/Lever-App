import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DealerDashboard from '../screens/dealerPortal/DealerDashboard';
import LenderDashboard from '../screens/lenderPortal/LenderDashboard';

const Stack = createStackNavigator();

const StackNavigator = () => {
	<Stack.Navigator>
		<Stack.Screen name="Com1" component={Com1} />
		<Stack.Screen name="Com2" component={Com2} />
	</Stack.Navigator>;
};

const comp1 = () => {
	return <Text>Com1</Text>;
};

const comp2 = () => {
	return <Text>Com2</Text>;
};

const AppNav = () => {
	console.log('AppNav');

	<NavigationContainer>
		<StackNavigator />
	</NavigationContainer>;
};

export default AppNav;
