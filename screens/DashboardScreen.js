import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../Navigation/drawerNavigation";

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}