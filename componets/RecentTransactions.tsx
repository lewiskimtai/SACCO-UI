import Colors from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";

const RecentTransactions = () => {
  const transactions = [
    {
      date: "2024-12-15",
      description: "Salary",
      amount: "UGX 500,000.00",
      type: "Credit",
    },
    {
      date: "2024-12-10",
      description: "Rent Payment",
      amount: "UGX 200,000.00",
      type: "Debit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Credit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Debit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Credit",
    },

    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Debit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Credit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Debit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Credit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Credit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Debit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Debit",
    },
    {
      date: "2024-12-05",
      description: "Groceries",
      amount: "UGX 50,000.00",
      type: "Debit",
    },
  ];

  return (
    <View style={styles.recenttransactionsWrapper}>
      <Text style={styles.header}>Recent Transactions</Text>
      <View style={styles.transactionHeaders}>
        <Text style={styles.transactionHeader}>Date</Text>
        <Text style={styles.transactionHeader}>Description</Text>
        <Text style={styles.transactionHeader}>Amount</Text>
      </View>
      <ScrollView scrollEventThrottle={5}>
        {transactions.map((transaction, index) => (
          <View key={index} style={styles.transactionRow}>
            <Text style={styles.date}>{transaction.date}</Text>
            <Text style={styles.description}>{transaction.description}</Text>
            <View style={styles.amountContainer}>
              <Text
                style={[
                  styles.transactionType,
                  { color: transaction.type === "Credit" ? "green" : "red" },
                ]}
              >
                {transaction.type === "Credit" ? "+" : "-"}
              </Text>
              <Text style={styles.amount}>{transaction.amount}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  recenttransactionsWrapper: {
    height: 250,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionHeaders: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    borderBottomWidth: 1, // Added border for grid line
    borderColor: Colors.grey, // Adjust border color as needed
    marginRight: 10,
  },
  transactionHeader: {
    fontSize: 16,
    fontWeight: "900",
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "flex-start", // Maintains vertical alignment
    borderBottomWidth: 0.5, // Added border for grid line
    borderColor: Colors.grey, // Adjust border color as needed
    marginRight: 10,

  },
  date: {
    fontSize: 16,
    color: "gray",
    flex: 1,
  },
  description: {
    fontSize: 16,
    flex: 2,
    marginLeft: 5,
  },
  amountContainer: {
    flexDirection: "row",
  },
  transactionType: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
  },
});

export default RecentTransactions;
