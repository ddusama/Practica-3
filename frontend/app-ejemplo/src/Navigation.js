import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileCard from "./components/home/ProfileCard";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import List from "./components/list/List";
import Name from "./components/name/Name"
import ChatGPT from "./components/chatgpt/ChatGPT";
import ChatPDF from "./components/chatpdf/ChatPDF";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={ProfileCard} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="home" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="list" component={List} options={{
                tabBarLabel: "Listado",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="name" component={Name} options={{
                tabBarLabel: "Nombre",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="pencil-circle-outline" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="chatgpt" component={ChatGPT} options={{
                tabBarLabel: "ChatGPT",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="chat-processing" color={color} size={size} />
                }
            }} />
             <Tab.Screen name="chatpdf" component={ChatPDF} options={{
                tabBarLabel: "ChatPDF",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="chat-processing" color={color} size={size} />
                }
            }} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});