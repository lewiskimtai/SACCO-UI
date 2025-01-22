import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SubtlePrism } from "@/constants/Icons"; // Assuming SubtlePrism is imported correctly
import Colors from "@/constants/Colors";

const SaccoMembers = () => {
  const members = [
    {
      name: "John Doe",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Jane Smith",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "David Lee",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Sarah Jones",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "John Doe",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Jane Smith",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "David Lee",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Sarah Jones",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "John Doe",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Jane Smith",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "David Lee",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Sarah Jones",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "John Doe",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Jane Smith",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "David Lee",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Sarah Jones",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "John Doe",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Jane Smith",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "David Lee",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
    {
      name: "Sarah Jones",
      profilePicture: require("../../../assets/images/indprofile.png"),
    },
  ];

  const renderMemberItem = ({ item }: { item: { name: string; profilePicture: any } }) => (
    <View style={styles.memberItem}>
      <View style={styles.profilePictureContainer}>
        <Image source={item.profilePicture} style={styles.profilePicture} />
      </View>
      <Text style={styles.memberName}>{item.name}</Text>
    </View>
  );

  return (
    <ImageBackground source={SubtlePrism} style={styles.background}>
      <View style={{ paddingHorizontal: 10}}>
        <View style={styles.container}>
          <FlatList
            data={members}
            keyExtractor={(item) => item.name}
            renderItem={renderMemberItem}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    
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
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePictureContainer: {
    
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  memberName: {
    fontSize: 16,
  },
});

export default SaccoMembers;
