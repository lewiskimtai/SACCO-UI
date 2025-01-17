import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from './dashboard';
import Statement from './statement';
import { NavigationContainer } from '@react-navigation/native';
import { TopTabBar } from '@/componets/ToptabBar';
import Saccos from './saccolist';
import SaccoChat from './discussion';
import SaccoMembers from './members';
import SaccoList from './saccolist';

const Tab = createMaterialTopTabNavigator();

function TopTabBarLayout() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
        <Tab.Screen name="Saccolist" component={SaccoList} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Members" component={SaccoMembers} />
        <Tab.Screen name="Statment" component={Statement} />
        <Tab.Screen name="Discussion" component={SaccoChat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default TopTabBarLayout
