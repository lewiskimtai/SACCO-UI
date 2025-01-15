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
                <View style={styles.saccodetailText}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "gray",
                    }}
                  >
                    Date:
                  </Text>
                </View>
                <View style={styles.saccodetailText}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "gray",
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              </View>
              <View style={styles.amountInfo}>
                <View style={styles.saccodetailText}>
                  <Text style={styles.loanamountText}>Loan Amount:</Text>
                </View>
                <View style={styles.saccodetailText}>
                  <Text style={styles.loanamountText}>
                    UGX {item.loanAmount}
                  </Text>
                </View>
              </View>
              <View style={styles.installmentamountInfo}>
                <View style={styles.saccodetailText}>
                  <Text style={styles.installmentamountText}>
                    Installment Amount:
                  </Text>
                </View>
                <View style={styles.saccodetailText}>
                  <Text style={styles.installmentamountText}>
                    UGX {item.installmentAmount}
                  </Text>
                </View>
              </View>
              <View style={styles.loanperioddateInfo}>
                <View style={styles.saccodetailText}>
                  <Text style={styles.loanperiodText}>Loan Period:</Text>
                </View>
                <View style={styles.saccodetailText}>
                  <Text style={styles.monthsText}>
                    {item.loanPeriod} months
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.payloanButton}>
                <Text style={styles.payloanbuttonText}>Pay Loan</Text>
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

    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 10, // Added padding for better spacing
    marginBottom: 5, // Added margin for better separation
  },
  saccoLoan: {
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderColor: Colors.grey,
    marginBottom: 5,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  saccoloanDetails: {
    flexDirection: "column",
  },
  sacconameText: {
    fontSize: 18,
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
  saccodetailText: {
    width: 130,
  },
  loanamountText: {
    fontSize: 16,
    color: Colors.grey,
  },
  loanperiodText: {
    fontSize: 16,
    color: Colors.grey,
  },
  monthsText: {
    fontSize: 16,
    color: Colors.grey,
  },
  installmentamountText: {
    fontSize: 16,
    color: Colors.grey,
  },
  payloanButton: {
    width: 95,
    marginLeft: 210,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bluee,
    borderWidth: 1,
    borderColor: Colors.bluee,
    paddingLeft: 2,
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  payloanbuttonText: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.white,
  },
});
