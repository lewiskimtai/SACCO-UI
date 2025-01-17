import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from './dashboard';
import Statement from './statement';
import { NavigationContainer } from '@react-navigation/native';
import { TopTabBar } from '@/componets/ToptabBar';
import Saccos from './saccos';

const Tab = createMaterialTopTabNavigator();

function TopTabBarLayout() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={Saccos} />
      <Tab.Screen name="Statment" component={Statement} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}



export default TopTabBarLayout
