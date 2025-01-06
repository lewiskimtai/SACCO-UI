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
            <View
              style={styles.walletbalanceWrapper}
            >
              <View style={{ flexDirection: "row", }}>
                <Ionicons
                  name="wallet"
                  size={24}
                  style={{ color: Colors.black }}
                />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>
                  Wallet <Text style={{ fontWeight: "bold" }}>Balance</Text>
                </Text>
              </View>

              <Text style={{ fontSize: 22, fontWeight: "800" }}>UGX</Text>
              <Text>
                <Text style={{ fontSize: 30, fontWeight: "900" }}>
                  500,000.
                </Text>
                <Text style={{ fontSize: 24 }}>00</Text>
              </Text>
            </View>
            <View
              style={styles.crbgraphWrapper}
            >
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
    height: 110,
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
    fontSize: 17,
    fontWeight: "700",
    color: Colors.white,
  },
  walletbalanceWrapper: {
    gap: 10,
    backgroundColor: "#DEDEDE",
    borderWidth: 1,
    borderColor: "#DEDEDE",
    width: 180,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 10,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  crbgraphWrapper: {
    marginLeft: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DEDEDE",
    borderWidth: 1,
    borderColor: "#DEDEDE",
    width: 180,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
});

export default Home;
