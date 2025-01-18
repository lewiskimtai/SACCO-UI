import { SubtlePrism } from "@/constants/Icons";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SaccoChat = () => {
  return (
      <ImageBackground
        source={SubtlePrism}
        style={styles.background}
      >
        <SafeAreaView>

        </SafeAreaView>
      </ImageBackground>
    
  );
};

export default SaccoChat;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
});
