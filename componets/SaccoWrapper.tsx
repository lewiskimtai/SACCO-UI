import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "@/constants/Colors";
import { Link, router } from "expo-router";

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
              router.push("/(tabs)/(sacco)/dashboard");
            }}
          >
            <View style={styles.saccosItem}>
              <Image
                source={item.profilePicture}
                style={styles.profilePicture}
              />
              <View style={styles.saccosInfo}>
                <Text style={styles.saccosName}>{item.name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View style={{ width: 175 }}>
                    <Text style={styles.savingAmount}>
                      Savings: UGX {item.saving}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.interestEarned}>
                      Interest Earned: {item.interestEarned}
                    </Text>
                  </View>
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
    height: 765,
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
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
  saccoButtons: {
    flexDirection: "row",
    marginLeft: 70,
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
    height: 60,
    marginBottom: 10,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 10,
    marginTop: 10
  },
  saccosInfo: {},
  saccosName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  savingAmount: {
    fontSize: 16,
    color: Colors.grey,
  },
  interestEarned: {
    fontSize: 14,
    color: "green", // Assuming positive interest is green
    
  },
});
