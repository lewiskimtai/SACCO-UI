import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const transactions = [
  {
    saccoName: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"),
    date: "2023-11-15",
    loanAmount: 500000,
    installmentAmount: 50000,
    loanPeriod: 12,
  },
  {
    saccoName: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"),
    date: "2023-12-05",
    loanAmount: 10000,
    installmentAmount: 50000,
    loanPeriod: 12,
  },
  {
    saccoName: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"),
    date: "2023-10-20",
    loanAmount: 200000,
    installmentAmount: 25000,
    loanPeriod: 8,
  },
];

const RunningloanWrapper = () => {
  return (
    <View style={styles.runningloanWrapper}>
      <Text style={styles.header}>Current Loans</Text>
      <FlatList
        data={transactions} // No filtering needed as "type" is removed
        renderItem={({ item }) => (
          <View style={styles.saccoLoan}>
            <Image source={item.profilePicture} style={styles.profilePicture} />
            <View style={styles.saccoloanDetails}>
              <Text style={styles.sacconameText}>{item.saccoName}</Text>
              <View style={styles.dateInfo}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "gray",
                  }}
                >
                  Date:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "gray",
                  }}
                >
                  {item.date}
                </Text>
              </View>
              <View style={styles.amountInfo}>
                <Text>Loan Amount:</Text>
                <Text>UGX {item.loanAmount}</Text>
              </View>
              <View style={styles.installmentamountInfo}>
                <Text>Installment Amount:</Text>
                <Text>UGX {item.installmentAmount}</Text>
              </View>
              <View style={styles.loanperioddateInfo}>
                <Text>Loan Period:</Text>
                <Text>{item.loanPeriod} months</Text>
              </View>
              <TouchableOpacity>
                <Text>Pay Loan</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default RunningloanWrapper;

const styles = StyleSheet.create({
  runningloanWrapper: {
    height: 670,
    marginTop: 5,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10, // Added padding for better spacing
    marginBottom: 5, // Added margin for better separation
  },
  saccoLoan: {
    flexDirection: "row",
    marginBottom: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  saccoloanDetails: {
    flexDirection: "column",
  },
  sacconameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dateInfo: {
    flexDirection: "row",
  },
  amountInfo: {
    flexDirection: "row",
  },
  installmentamountInfo: {
    flexDirection: "row",
  },
  installmentdateInfo: {
    flexDirection: "row",
  },
  loanperioddateInfo: {
    flexDirection: "row",
  },
});