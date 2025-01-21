import { SubtlePrism } from "@/constants/Icons";
import { ImageBackground, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Statement = () => {
  return (
      <ImageBackground
        source={SubtlePrism}
        style={styles.background}
      >

        
      </ImageBackground>
  );
};

export default Statement;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
});
