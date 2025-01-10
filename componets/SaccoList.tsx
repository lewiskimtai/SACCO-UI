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

const saccos = [
  {
    name: "Koperasi Mwalimu Sacco",
    id: 1,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    id: 2,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    id: 3,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  {
    name: "Koperasi Mwalimu Sacco",
    id: 1,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    id: 2,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    id: 3,
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  // Add more saccos as needed
];

const SaccoList = () => {
  return (
    <View style={styles.recenttransactionsWrapper}>
      <Text style={styles.header}>Sacco List</Text>
      <FlatList
        data={saccos}
        renderItem={({ item }) => (
          <View style={styles.saccosItem}>
            <Image source={item.profilePicture} style={styles.profilePicture} />
            <View style={styles.saccosInfo}>
              <Text style={styles.saccosName}>{item.name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.savingAmount}>
                  Savings: UGX {item.saving}
                </Text>
                <Text style={styles.interestEarned}>
                  Interest: {item.interestEarned}
                </Text>
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
  saccosItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderColor: Colors.grey,
    height: 60,
    marginTop: 5,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 10,
  },
  saccosInfo: {
    
  },
  saccosName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  savingAmount: {
    fontSize: 18,
    color: Colors.grey,
  },
  interestEarned: {
    fontSize: 14,
    color: "green", // Assuming positive interest is green
    marginLeft: 60,
  },
});

export default SaccoList;
