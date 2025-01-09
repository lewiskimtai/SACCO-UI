import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Crbgraph from "@/componets/Crbgraph";
import Ionicons from "@expo/vector-icons/Ionicons";
import DepositandWithdrawButton from "@/componets/DepositandWithdrawButton";
import RecentTransactions from "@/componets/RecentTransactions";

const Home = () => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <View style={styles.profileHolder}>
              <Image
                source={require("../../assets/images/profilepic.jpg")}
                style={styles.profileImage}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.hiName}>
                  Hi, <Text style={{ fontWeight: "700" }}>Lewis</Text>
                </Text>
              </View>
            </View>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>
                  CREDIT SCORE: <Text style={{ fontWeight: "bold" }}>55</Text>
                </Text>
              <Crbgraph />
            </View>
          </View>
          <View >
            <View style={{ flexDirection: "column", }}>
              <View style={styles.walletbalanceWrapper}>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="wallet"
                    size={30}
                    style={{ color: Colors.black }}
                  />
                  <Text style={{ fontSize: 30, marginLeft: 10 }}>
                    Wallet <Text style={{ fontWeight: "bold" }}>Balance</Text>
                  </Text>
                </View>

                <Text style={{ fontSize: 25, fontWeight: "800" }}>UGX</Text>
                <Text>
                  <Text style={{ fontSize: 40, fontWeight: "900" }}>
                    500,000.
                  </Text>
                  <Text style={{ fontSize: 21 }}>00</Text>
                </Text>
              </View>
              <DepositandWithdrawButton />
            </View>
          </View>
          <RecentTransactions />
        </View>
      </SafeAreaView>
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
    paddingHorizontal: 15,
    backgroundColor: "#DEDEDE",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    borderRadius: 10,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  profileHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  hiName: {
    fontSize: 20,
    color: Colors.grey,
  },
  loanrequestButton: {
    width: 150,
    backgroundColor: Colors.bluee,
    borderWidth: 1,
    borderColor: Colors.bluee,
    padding: 8,
    paddingLeft: 20,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  loanRequest: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    fontWeight: "700",
    color: Colors.white,
  },
  profileButton: {
    backgroundColor: Colors.bluee,
    borderWidth: 1,
    borderColor: Colors.bluee,
    padding: 8,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  walletbalanceWrapper: {
    gap: 10,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    width: 380,
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  crbgraphWrapper: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    width: 180,
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  recenttransactionsWrapper: {
    marginTop: 10,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
});

export default Home;
