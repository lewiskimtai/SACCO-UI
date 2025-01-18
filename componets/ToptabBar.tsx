import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, StyleSheet } from "react-native";
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
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {state.routes
          .slice(1)
          .map(
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

              const isFocused = state.index === index + 1; // Adjust index for focus

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

              const inputRange = state.routes
                .slice(1)
                .map((_: any, i: any) => i); // Adjust inputRange
              const opacity = interpolate(
                position.x,
                inputRange,
                inputRange.map((i: any) => (i === index ? 1 : 0))
              );
              const animatedStyles = useAnimatedStyle(() => ({ opacity }));

              return (
                <TouchableOpacity
                  key={route.key}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={[styles.tab, isFocused && styles.tabFocused]}
                >
                  <Animated.Text
                    style={[styles.text, isFocused && styles.textFocused]}
                  >
                    {label}
                  </Animated.Text>
                  {isFocused && <View style={styles.tabBarUnderline} />}
                </TouchableOpacity>
              );
            }
          )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around", // Center tabs horizontally
    padding: 10,
    backgroundColor: "#f0f0f0", // Add background color
    marginTop: 20
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10, // Add padding
  },
  tabFocused: {
    backgroundColor: "#e0e0e0", // Change background color on focus
  },
  text: {
    fontSize: 20, // Increase font size here
  },
  textFocused: {
    // Optional: Add styles for focused text (e.g., bold)
  },
  tabBarUnderline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 2, // Adjust height of the line
    backgroundColor: Colors.bluee, // Use your desired color from Colors
  },
});
