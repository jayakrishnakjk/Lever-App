import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from "../../components/Home/Home"
import Dashboard from "../../components/Dashboard/Dashboard"
import Settings from "../../components/Settings/Settings"
import UserProfile from '../../components/UserProfile'

const DealerDashboard = () => {

	const Tab = createBottomTabNavigator()

	const homeName = 'Home';
	const dashboard = 'Dashboard';
	const settingsName = 'Settings';
	const profile = 'UserProfile';

	return (
		<Tab.Navigator
			initialRouteName={homeName}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					let iconName;
					let rn = route.name;

					switch (rn) {
						case 'homeName':
							iconName = focused ? 'home' : 'home-outline';
							break;
						case 'dashboard':
							iconName = focused ? 'list' : 'list-outline';
							break;
						case 'settingsName':
							iconName = focused ? 'settings' : 'settings-outline'
							break;
						default:
							iconName = focused ? 'profile' : 'profile-outline'
							break;
					}

					return <Ionicons name={iconName} size={12} color={color} />
				}
			})}
		>

			<Tab.Screen name={homeName} component={Home} />
			<Tab.Screen name={dashboard} component={Dashboard} />
			<Tab.Screen name={settingsName} component={Settings} />
			<Tab.Screen name={profile} component={UserProfile} />

		</Tab.Navigator>
	);
};

export default DealerDashboard;
