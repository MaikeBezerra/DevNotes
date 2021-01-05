import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import ListScreen from "../pages/ListScreen";
import EditNoteScreen from "../pages/EditNoteScreen";

const Stack = createStackNavigator();

export default ()=> (
    <NavigationContainer>
        <Stack.Navigator screenOptions={
            {
                headerStyle:{
                    backgroundColor: '#222'
                },
                headerTintColor: '#FFF'
            }
        }>
            <Stack.Screen name="Home" component={ListScreen} />
            <Stack.Screen name="EditNote" component={EditNoteScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);