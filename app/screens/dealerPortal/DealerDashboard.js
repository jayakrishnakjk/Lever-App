import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from "../../components/Home/Home"
import Dashboard from "../../components/Dashboard/Dashboard"
import Settings from "../../components/Settings/Settings"

const DealerDashboard = () => {
	

	

	const Tab = createBottomTabNavigator()

	const homeName = 'Home';
	const dashboard = 'Dashboard';
	const settingsName = 'Settings'

	return (
			<Tab.Navigator
				initialRouteName={homeName}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color }) => {
						let iconName;
						let rn = route.name;

						if (rn === homeName) {
							iconName = focused ? 'home' : 'home-outline';
						} else if (rn === dashboard) {
							iconName = focused ? 'list' : 'list-outline';
						} else {
							iconName = focused ? 'settings' : 'settings-outline'
						}

						return <Ionicons name={iconName} size={12} color={color} />
					}
				})}
			>

				<Tab.Screen name={homeName} component={Home} />
				<Tab.Screen name={dashboard} component={Dashboard} />
				<Tab.Screen name={settingsName} component={Settings} />

			</Tab.Navigator>
	);
};

export default DealerDashboard;
