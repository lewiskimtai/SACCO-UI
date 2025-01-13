import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Platform,
} from "react-native";
import Colors from "@/constants/Colors";

const transactions = [
  // Sample transaction data (replace with actual data)
  {
    saccoName: "Koperasi Mwalimu Sacco",
    id: 1,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with image path
    transactionType: "Deposit",
    amount: 5000,
    date: "2023-01-10",
  },
  {
    saccoName: "Saccos for Education Kenya",
    id: 2,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with image path
    transactionType: "Withdrawal",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    saccoName: "Hazina Sacco",
    id: 3,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with image path
    transactionType: "Interest Earned",
    amount: 100,
    date: "2023-01-11",
  },
  // Add more transactions as needed
];

const SaccoList = () => {
  return (
    <View style={styles.recenttransactionsWrapper}>
      <Text style={styles.header}>Recent Sacco Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Image source={item.profilePicture} style={styles.profilePicture} />
            <View style={styles.transactionInfo}>
              <Text style={styles.saccosName}>{item.saccoName}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.transactionDetails}>
                  {item.transactionType} - UGX {item.amount}
                </Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Extract a unique key for each item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recenttransactionsWrapper: {
    height: 240,
    marginTop: 5,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
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
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderColor: Colors.grey,
    height: 70,
    marginTop: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  transactionInfo: {
    flexDirection: "column",
  },
  saccosName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDetails: {
    fontSize: 14,
    color: Colors.grey,
  },
  date: {
    fontSize: 12,
    color: Colors.grey,
  },
});

export default SaccoList;
