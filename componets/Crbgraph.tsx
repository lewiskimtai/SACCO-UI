import Colors from "@/constants/Colors";
import React from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const pieData = [
  {
    value: 20,
    color: "#ff0000",
    text: "40%",
  },
  {
    value: 20,
    color: "#ffa700",
    text: "30%",
  },
  {
    value: 20,
    color: "#fff400",
    text: "20%",
  },
  {
    value: 20,
    color: "#a3ff00",
    text: "60%",
  },

  {
    value: 20,
    color: "#2cba00",
    text: "60%",
  },
];

const Crbgraph = () => {
  const needleRotation = new Animated.Value(0);

  // Example: Simulate needle movement (replace with your actual data source)
  Animated.timing(needleRotation, {
    toValue: 1,
    duration: 7000,
    useNativeDriver: true,
  }).start();

  const needleStyle = {
    transform: [
      { translateX: 0 }, // Center the needle horizontally
      { translateY: 0 }, // Adjust for needle position
      {
        rotate: needleRotation.interpolate({
          inputRange: [0, 1],
          outputRange: ["200deg", "400deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <PieChart
        data={pieData}
        donut
        showGradient
        sectionAutoFocus
        semiCircle
        radius={70}
        innerRadius={55}
        innerCircleColor={Colors.white}
        centerLabelComponent={() => {
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 22,
                  color: "black",
                  fontWeight: "900",
                }}
              >
                47%
              </Text>
              <Animated.View style={[styles.needleContainer, needleStyle]}>
                <Image
                  source={require("../assets/images/download.png")} // Replace with your needle image path
                  style={styles.needleImage}
                />
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 5,
  },
  needleContainer: {
    position: "absolute",
  },
  needleImage: {
    width: 70, // Adjust width and height as needed
    height: 95,
  },
});

export default Crbgraph;
