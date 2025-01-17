import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from "./dashboard";
import Statement from "./statement";
import { NavigationContainer } from "@react-navigation/native";
import { TopTabBar } from "@/componets/ToptabBar";
import SaccoChat from "./discussion";
import SaccoMembers from "./members";
import SaccoList from "./saccolist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();



function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
      <Tab.Screen name="Saccolist" component={SaccoList} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Members" component={SaccoMembers} />
      <Tab.Screen name="Statment" component={Statement} />
      <Tab.Screen name="Discussion" component={SaccoChat} />
    </Tab.Navigator>
  );
}

function TopTabBarLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TopTabBarLayout;
