import { SubtlePrism } from "@/constants/Icons";
import { ImageBackground, StyleSheet, Text, View,  } from "react-native";



const Dashboard = () => {

  
  return (
    <ImageBackground source={SubtlePrism} style={styles.background}>
      <Text>Dashboard</Text>
      <View style={{ paddingTop: 30 }}>
        
      </View>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
  },
});
