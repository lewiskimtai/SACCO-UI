import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TabBar } from "@/componets/TabBar";



function Layout() {

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="deposit"
        options={{
          headerShown: false,
          title: "Deposit",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="cash-plus" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="home" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="withdraw"
        options={{
          headerShown: false,
          title: "Withdraw",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="cash-minus" size={35} color={color} />
          ),
        }}
      />
    </Tabs>
  
  );
}

export default Layout;
