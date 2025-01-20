import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import RecentTransactions from "@/componets/home/RecentTransactions";
import { SubtlePrism } from "@/constants/Icons";
import HeaderWrapper from "@/componets/home/HeaderWrapper";
import WalletWrapper from "@/componets/home/WalletWrapper";
import DepositandWithdrawButton from "@/componets/home/DepositandWithdrawButton";
import RecentsaccoTransactions from "@/componets/home/RecentsaccoTransactions";

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
