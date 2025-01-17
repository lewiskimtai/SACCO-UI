import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";


export function TopTabBar({
  state,
  descriptors,
  navigation,
  position,
}: {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
}) {
  return (
    <View style={styles.container}>
      {state.routes.map(
        (
          route: { key: React.Key | null | undefined; name: any },
          index: any
        ) => {
          const { options } = descriptors[route.key as string];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_: any, i: any) => i);
          const opacity = interpolate(
            position.x,
            inputRange,
            inputRange.map((i: any) => (i === index ? 1 : 0))
          );
          const animatedStyles = useAnimatedStyle(() => ({ opacity }));

          return (
            <TouchableOpacity
              key={route.key} // Add key for better performance
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
            >
              <Animated.Text style={animatedStyles}>{label}</Animated.Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around", // Center tabs horizontally
    padding: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
});

