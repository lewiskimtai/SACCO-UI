import { StyleSheet, ImageBackground, Text, View, Platform } from "react-native";
import { SubtlePrism } from "@/constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Colors from "@/constants/Colors";

const Loans = () => {
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={SubtlePrism} style={styles.background}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <View style={styles.headerWrapper}>              </View>
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
    flex: 1,
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

export default Loans;
