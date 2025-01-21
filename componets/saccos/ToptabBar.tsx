import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import SaccoHeader from "./SaccoHeader";

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
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={{ gap: 10 }}>
          <SaccoHeader />
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
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around", // Center tabs horizontally

    backgroundColor: Colors.bluee
  
  
  },
  safeAreaView: {},
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10, // Add padding
  },
  tabFocused: {
    backgroundColor: Colors.blue, // Change background color on focus
    fontWeight: "900",
  },
  text: {
    fontSize: 18, // Increase font size here
    color: Colors.white
  },
  textFocused: {
    fontWeight: "900",
    fontSize: 21
  },
  tabBarUnderline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 2, // Adjust height of the line
    backgroundColor: Colors.white, // Use your desired color from Colors
  },
});
