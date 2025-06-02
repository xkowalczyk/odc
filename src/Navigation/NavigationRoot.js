import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import SettingsPage from "../screens/SettingsPage";
import UsersTeamPage from "../screens/UsersTeamPage";
import ManageFirefighterScreen from "../screens/ManageFirefighterScreen";

const Stack = createNativeStackNavigator();

const NavigationRoot = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{navigationBarHidden: false}}>
                <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: true, animation: 'slide_from_bottom', title:"Wybór Opcji", navigationBarColor:"white"}}/>
                <Stack.Screen name="Settings" component={SettingsPage} options={{ headerShown: true, animation: 'slide_from_bottom'}}/>
                <Stack.Screen name="UsersTeam" component={UsersTeamPage} options={{ headerShown: true, animation: 'slide_from_bottom', title:"Zarządzanie strazakami i grupami" }}/>
                <Stack.Screen name="ManageFirefighter" component={ManageFirefighterScreen} options={{ headerShown: true, animation: 'slide_from_bottom', title:"Zarządzanie strazakami" }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationRoot;