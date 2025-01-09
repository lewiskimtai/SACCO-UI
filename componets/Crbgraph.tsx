import Colors from "@/constants/Colors";
import React, { useEffect, useState } from "react";
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
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handRotation = seconds * 6; // 6 degrees per second

  return (
    <PieChart
      data={pieData}
      donut
      showGradient
      sectionAutoFocus
      semiCircle
      radius={40}
      innerRadius={30}
      innerCircleColor={Colors.white}
      centerLabelComponent={() => {
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            
            <View
              style={[
                styles.container,
                { transform: [{ rotate: `370deg` }] },
              ]}
            >
              <View style={styles.hand} />
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  needleContainer: {
    position: "absolute",
  },
  needleImage: {
    width: 70, // Adjust width and height as needed
    height: 95,
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  hand: {
    width: 5,
    height: 40,
    backgroundColor: "black",
    borderRadius: 1,
    transform: [{ translateY: "-20%" }],
  },
});

export default Crbgraph;
