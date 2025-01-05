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
            <TouchableOpacity
              onPress={() => {}}
              style={styles.loanrequestButton}
            >
              <Text style={styles.loanRequest}>Request for a Loan</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={styles.balanceText}>
                Wallet <Text style={{ fontWeight: "900" }}>Balance</Text>
              </Text>
              <Text style={styles.balanceDigits}>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>UGX </Text>
                500,000.
                <Text style={{ fontSize: 22, fontWeight: "400" }}>00</Text>
              </Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>CRB SCORE</Text>
              <Crbgraph />
            </View>
          </View>
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
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
  },
  profileHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  hiName: {
    fontSize: 16,
    color: Colors.grey,
  },
  loanrequestButton: {
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
  loanRequest: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.white,
  },
  balanceText: {
    fontSize: 18,
  },
  balanceDigits: {
    fontSize: 25,
    fontWeight: "700",
  },
});

export default Home;
