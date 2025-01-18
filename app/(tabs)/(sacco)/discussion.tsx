import { SubtlePrism } from "@/constants/Icons";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const SaccoChat = () => {
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

export default SaccoChat;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
});
