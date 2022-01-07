import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator.js";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name="Home" component={TabNavigator}

            />
            <Drawer.Screen
                name="Contact"
                component={ContactStackNavigator}

            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;