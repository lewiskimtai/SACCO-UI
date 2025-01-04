import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerView}>
        <View style={styles.profileHolder}>
          <Image
            source={require("../assets/images/profilepic.jpg")}
            style={styles.profileImage}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.hiName}>
              Hi, <Text style={{ fontWeight: "700" }}>Lewis</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.loanrequestButton}>
          <Text style={styles.loanRequest}>Request for a Loan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
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
});
