import Home from "../screens/home";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Detailed from "../screens/detailed";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline'
                        else if (route.name === 'Details') iconName = focused ? 'settings' : 'settings-outline'

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'black'
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Tab.Screen name="Details" component={Detailed} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigation;