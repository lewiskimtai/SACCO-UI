import {StyleSheet,
  ImageBackground,
  Text
} from "react-native";
import { SubtlePrism } from "@/constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () => {
  

  return (
    <ImageBackground source={SubtlePrism} style={styles.background}>
      <SafeAreaView style={styles.safeAreaView}>
        <Text>Home</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
  safeAreaView: {
    flex: 1,
  },
});

export default Home;
