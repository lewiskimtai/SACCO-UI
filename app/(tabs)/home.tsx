import {
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import RecentTransactions from "@/componets/RecentTransactions";
import SaccoList from "@/componets/SaccoList";

import { SubtlePrism } from "@/constants/Icons";
import HeaderWrapper from "@/componets/HeaderWrapper";
import WalletWrapper from "@/componets/WalletWrapper";
import DepositandWithdrawButton from "@/componets/DepositandWithdrawButton";

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
            <SaccoList />
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
