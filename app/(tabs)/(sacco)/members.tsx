import { SubtlePrism } from "@/constants/Icons";
import { ImageBackground, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SaccoMembers = () => {
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

export default SaccoMembers;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
});
