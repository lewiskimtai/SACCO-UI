import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons"; // Import correctly
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface IconProps {
  size?: number;
  color?: string;
}

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused = false,
  routeName,
  color,
  label,
}: {
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: string;
}) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.8]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  let IconComponent;

  switch (routeName) {
    case "(sacco)":
      IconComponent = FontAwesome;
      break;
    case "home":
      IconComponent = Ionicons;
      break;
    case "loans":
      IconComponent = FontAwesome6;
      break;
    default:
      // Handle unexpected route names (e.g., log an error, display a default icon)
      IconComponent = null;
      break;
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      <Animated.View style={animatedIconStyle}>
        {IconComponent && (
          <IconComponent
            name={
              routeName === "(sacco)"
                ? "group"
                : routeName === "home"
                ? "home"
                : routeName === "loans"
                ? "hand-holding-dollar"
                : null
            }
            size={24}
            color={isFocused ? Colors.bluee : "#222"}
          />
        )}
      </Animated.View>
      <Animated.Text
        style={[
          { color: isFocused ? "#673ab7" : "#222", fontSize: 15 },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
