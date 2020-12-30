import React from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import ListScreen from "../pages/ListScreen";

const Stack = createStackNavigator();

export default ()=> (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ListScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);