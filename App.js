import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator, tabBarIcon} from "@react-navigation/stack"
import Menu from "./screens/Menu";


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options = {{
          title: "Mis tareas",
          headerTitleAling: "center",

          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      
      />
      </Stack.Navigator>


    </NavigationContainer>
  );
}



