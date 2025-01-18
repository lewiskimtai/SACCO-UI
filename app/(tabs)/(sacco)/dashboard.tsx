import MyCustTabs from "@/componets/CustTab";
import { SubtlePrism } from "@/constants/Icons";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  return (
    <ImageBackground source={SubtlePrism} style={styles.background}>
      <SafeAreaView>
        <Text>Dashboard</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
  safeAreaView: {
    flex: 1,
  },
});
