import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator()

import Home from "../screens/Home"
import Habit from "../screens/Habit"
import New from "../screens/New"

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home}></Screen>
            <Screen name="habit" component={Habit}></Screen>
            <Screen name="new" component={New}></Screen>
        </Navigator>
    )
}