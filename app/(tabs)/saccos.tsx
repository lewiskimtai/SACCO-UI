import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Platform,
} from "react-native";
import { SubtlePrism } from "@/constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SaccoWrapper from "@/componets/SaccoWrapper";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import SaccoHeader from "@/componets/SaccoHeader";

const Saccos = () => {
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={SubtlePrism} style={styles.background}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <SaccoHeader />
            <SaccoWrapper />
          </View>
        </SafeAreaView>
      </ImageBackground>
  </>
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
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 4,
  },
});

export default Saccos;
