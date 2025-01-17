import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TabBar } from "@/componets/TabBar";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { JSX } from "react/jsx-runtime";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";




function Layout() {

  return (
    <Tabs tabBar={(props: JSX.IntrinsicAttributes & BottomTabBarProps) => <TabBar {...props} />}>
      <Tabs.Screen
        name="saccos"
        options={{
          headerShown: false,
          title: "Saccos",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="group" size={24} color={color} />
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
        name="loans"
        options={{
          headerShown: false,
          title: "Loans",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome6 name="hand-holding-dollar" size={35} color={color} />
          ),
        }}
      />
    </Tabs>
  
  );
}

export default Layout;
