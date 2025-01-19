import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TabBar } from "@/componets/TabBar";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { JSX } from "react/jsx-runtime";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import HeaderWrapper from "@/componets/HeaderWrapper";




function Layout() {

  return (
    <Tabs
      tabBar={(props: JSX.IntrinsicAttributes & BottomTabBarProps) => (
        <TabBar {...props} />
      )}
    >
      <Tabs.Screen
        name="saccos"
        options={{
          headerShown: false,
          title: "Saccos",
          tabBarIcon: ({
            color,
            size,
            focused,
          }: {
            color: string;
            size: number;
            focused: boolean;
          }) => <FontAwesome name="group" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          headerTitle: () => <HeaderWrapper />, // Use the custom header component
          tabBarIcon: ({
            color,
            size,
            focused,
          }: {
            color: string;
            size: number;
            focused: boolean;
          }) => <Ionicons name="home" size={35} color={color} />,
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          headerShown: false,
          title: "Loans",
          tabBarIcon: ({
            color,
            size,
            focused,
          }: {
            color: string;
            size: number;
            focused: boolean;
          }) => (
            <FontAwesome6 name="hand-holding-dollar" size={35} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(sacco)"
        options={{
          headerShown: false,
          title: "saccolist",
          
        }}
      />
      
    </Tabs>
  );
}

export default Layout;
