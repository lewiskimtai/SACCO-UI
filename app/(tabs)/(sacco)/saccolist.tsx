import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Platform,
} from "react-native";
import { SubtlePrism } from "@/constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SaccoWrapper from "@/componets/saccos/SaccoWrapper";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

const SaccoList = () => {
  return (
    <>
      <StatusBar style="dark" />
      <ImageBackground source={SubtlePrism} style={styles.background}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <View style={styles.headerWrapper}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginRight: 10,
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontSize: 17, fontWeight: "500" }}>
                    TOTAL SAVINGS
                  </Text>
                  <Text style={{ fontSize: 17, fontWeight: "500" }}>UGX:</Text>
                  <Text style={{ fontSize: 28, fontWeight: "900" }}>
                    1,000,000
                  </Text>
                </View>
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                  <Text style={{ fontSize: 17, fontWeight: "500" }}>
                    TOTAL INTEREST
                  </Text>
                  <Text style={{ fontSize: 17, fontWeight: "500" }}>
                    EARNED:
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: "900", color: "green" }}
                  >
                    200,000
                  </Text>
                  <Text
                    style={{ fontSize: 17, fontWeight: "900", color: "green" }}
                  >
                    80%
                  </Text>
                </View>
              </View>
            </View>
            <SaccoWrapper />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
  safeAreaView: {
    
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 4,
  },
  headerWrapper: {
    height: 100,
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: Platform.OS === "android" ? 5 : 0,
  },
});

export default SaccoList;
