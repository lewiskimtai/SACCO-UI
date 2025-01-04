import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { SubtlePrism } from "@/constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import Header from "@/componets/Header";
import { StatusBar } from "expo-status-bar";
import { PieChart } from "react-native-gifted-charts";
import Colors from "@/constants/Colors";

const Home = () => {
   const pieData = [
     {
       value: 47,
       color: Colors.tintColor,
       focused: true,
       text: "47%",
     },
     {
       value: 40,
       color: Colors.blue,
       text: "40%",
     },
     {
       value: 16,
       color: Colors.white,
       text: "16%",
     },
     { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
   ];
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ gap: 10 }}>
            <Text style={styles.balanceText}>
              Wallet <Text style={{ fontWeight: "900" }}>Balance</Text>
            </Text>
            <Text style={styles.balanceDigits}>
              <Text style={{ fontSize: 20, fontWeight: "400" }}>UGX </Text>
              500,000.
              <Text style={{ fontSize: 22, fontWeight: "400" }}>00</Text>
            </Text>
          </View>
          <View>
            <Text>Pie Chart</Text>
            
          </View>
        </View>
      </View>
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
    paddingHorizontal: 15,
    paddingTop: 90,
  },
  balanceText: {
    fontSize: 18,
  },
  balanceDigits: {
    fontSize: 25,
    fontWeight: "700",
  },
});

export default Home;
