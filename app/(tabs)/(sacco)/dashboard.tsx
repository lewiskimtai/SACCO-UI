import { SubtlePrism } from "@/constants/Icons";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Dashboard = () => {
  return (
    <>
      <StatusBar style="dark" />
      <ImageBackground
        source={SubtlePrism}
        style={styles.background}
      ></ImageBackground>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
});
