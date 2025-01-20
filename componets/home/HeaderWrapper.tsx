import { Platform, StyleSheet, Text, Image, View } from "react-native";
import Colors from '@/constants/Colors';
import Crbgraph from './Crbgraph';

const HeaderWrapper = () => {
  return (
    <View>
      <View style={styles.headerView}>
        <View style={styles.profileHolder}>
          <Image
            source={require("../../assets/images/profilepic.jpg")}
            style={styles.profileImage}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.hiName}>
              Hi, <Text style={{ fontWeight: "700" }}>Lewis</Text>
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 15 }}>
            CREDIT SCORE: <Text style={{ fontWeight: "bold" }}>55</Text>
          </Text>
          <Crbgraph />
        </View>
      </View>
    </View>
  );
}

export default HeaderWrapper

const styles = StyleSheet.create({headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    borderRadius: 10,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  profileHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  hiName: {
    fontSize: 20,
    color: Colors.grey,
  },})