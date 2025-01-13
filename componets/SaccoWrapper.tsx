import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";


const saccos = [
  {
    name: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  {
    name: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  {
    name: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  {
    name: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  {
    name: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  {
    name: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  {
    name: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  {
    name: "Koperasi Mwalimu Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 5000,
    interestEarned: "12.5%",
  },
  {
    name: "Saccos for Education Kenya",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 50000,
    interestEarned: "10.2%",
  },
  {
    name: "Hazina Sacco",
    profilePicture: require("@/assets/images/groupicon.png"), // Replace with your image path
    saving: 10000,
    interestEarned: "14.1%",
  },
  // Add more saccos as needed
];

const SaccoWrapper = () => {
  return (
    <View style={styles.saccoWrapper}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sacco List</Text>
        <View style={styles.saccoButtons}>
          <TouchableOpacity style={styles.saccoButton}>
            <Text style={styles.saccobuttonTexts}>Create a Sacco</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saccoButton}>
            <Text style={styles.saccobuttonTexts}>Join a Sacco</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={saccos}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => {
              /* Handle Sacco press */
            }}
          >
            <View style={styles.saccosItem}>
              <Image
                source={item.profilePicture}
                style={styles.profilePicture}
              />
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SaccoWrapper;

const styles = StyleSheet.create({
  saccoWrapper: {
    height: 670,
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
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
  saccoButtons: {
    flexDirection: "row",
    marginLeft: 60,
  },
  saccoButton: {
    width: 95,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bluee,
    borderWidth: 1,
    borderColor: Colors.bluee,
    paddingLeft: 2,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  saccobuttonTexts: {
    fontSize: 16,
    fontWeight: "900",
    color: Colors.white,
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
  saccosInfo: {},
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
