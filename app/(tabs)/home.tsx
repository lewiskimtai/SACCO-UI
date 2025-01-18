import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import RecentTransactions from "@/componets/RecentTransactions";
import { SubtlePrism } from "@/constants/Icons";
import HeaderWrapper from "@/componets/HeaderWrapper";
import WalletWrapper from "@/componets/WalletWrapper";
import DepositandWithdrawButton from "@/componets/DepositandWithdrawButton";
import RecentsaccoTransactions from "@/componets/RecentsaccoTransactions";

const Home = () => {
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={SubtlePrism} style={styles.background}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <HeaderWrapper />
            <View style={{ flexDirection: "column" }}>
              <WalletWrapper />
              <DepositandWithdrawButton />
            </View>
            <RecentTransactions />
            <RecentsaccoTransactions />
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

export default Home;
