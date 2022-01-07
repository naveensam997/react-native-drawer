import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './src/navigation/StackNavigator';
import BottomTabNavigator from "./src/navigation/TabNavigator.js";

import DrawerNavigator from "./src/navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
export default App;