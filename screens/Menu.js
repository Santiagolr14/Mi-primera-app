import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, tabBarIcon } from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

import Tasks from "./Tasks";
import NewTask from "./NewTask";


const Tab = createBottomTabNavigator();

const Menu = () => {

    const theme = useTheme();
    theme.colors.secondaryContainer = "#008CFF"

    return(
        <Tab.Navigator 
            tabBarActivateBackgroundColor = "#fff"
            activateColor = "#000"
            inactiveColor = "#EC3109"
            barStyle = {styles.navigationBar}
        >

        <Tab.Screen
            name="Tareas"
            component={Tasks}
            options={{
                tabBarLabel: "Tareas",
                tabBarIcon: () => {
                    <MaterialCommunityIcons name="view-list" color="#000" size={24}/>
                }
            }}
            />

        <Tab.Screen
            name="Nueva Tarea"
            component={NewTask}
            options={{
                tabBarLabel: "Nuevas Tareas",
                tabBarIcon: () => {
                    <MaterialCommunityIcons name = "checkbox-marked-circle-plus-outline" color="#000" size={24}/>
                }
            }}
            />

        </Tab.Navigator>

    )
}


const styles = StyleSheet.create({
    navigationBar: {
        BackgroundColor: "#FF5400",
        paddingBottom: 5,
        borderTopWidth: .05,
        borderTopColor: "#000"
    }
})

export default Menu;