import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
      type: "Debit",
    },
  ];

  return (
    <View style={styles.recenttransactionsWrapper}>
      <Text style={styles.header}>Recent Transactions</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  recenttransactionsWrapper: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: "gray",
    flex: 1,
  },
  description: {
    fontSize: 16,
    flex: 2,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  transactionType: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default RecentTransactions;
