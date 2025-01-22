import { SubtlePrism } from "@/constants/Icons";

import {
  ImageBackground,
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
    description: "Deposit",
    type: "Credit",
    amount: 5000,
    date: "2023-01-10",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Deposit",
    type: "Credit",
    amount: 5000,
    date: "2023-01-10",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Deposit",
    type: "Credit",
    amount: 5000,
    date: "2023-01-10",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Deposit",
    type: "Credit",
    amount: 5000,
    date: "2023-01-10",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Deposit",
    type: "Credit",
    amount: 5000,
    date: "2023-01-10",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Deposit",
    type: "Credit",
    amount: 5000,
    date: "2023-01-10",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Deposit",
    type: "Credit",
    amount: 5000,
    date: "2023-01-10",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  {
    description: "Withdrawal",
    type: "Debit",
    amount: 2000,
    date: "2023-01-12",
  },
  {
    description: "Interest Earned",
    type: "Credit",
    amount: 100,
    date: "2023-01-11",
  },
  // Add more transactions as needed
];

const MysaccoStatement = () => {
  return (
    <ImageBackground source={SubtlePrism} style={styles.background}>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.recenttransactionsWrapper}>
          <FlatList
            data={transactions}
            renderItem={({ item }) => (
              <View style={styles.transactionItem}>
                
                <View style={styles.transactionInfo}>
                  <View style={styles.transactionDetails}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.amountContainer}>
                      <Text
                        style={[
                          styles.transactionType,
                          {
                            color: item.type === "Credit" ? "green" : "red",
                          },
                        ]}
                      >
                        {item.type === "Credit" ? "+" : "-"}
                      </Text>
                      <Text style={styles.amount}>UGX {item.amount}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
  recenttransactionsWrapper: {
    paddingHorizontal: 10,
    height: 735,
    marginTop: 5,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
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
    height: 30,
    marginRight: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  transactionInfo: {
    flex: 1,
  },
  saccosName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  amountContainer: {
    flexDirection: "row",
  },
  transactionType: {
    fontSize: 18,
    fontWeight: "bold",
  },
  transactionDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 16,
    color: "gray",
  },
  description: {
    fontSize: 16,
    flex: 2,
    marginLeft: 30,
  },
  amount: {
    fontSize: 16,
  },
});

export default MysaccoStatement;
