import { SubtlePrism } from "@/constants/Icons";
import { ImageBackground, StyleSheet,  } from "react-native";

const SaccoChat = () => {
  return (
      <ImageBackground
        source={SubtlePrism}
        style={styles.background}
      >

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
