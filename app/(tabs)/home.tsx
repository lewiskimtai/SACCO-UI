import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SubtlePrism } from "@/constants/Icons";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Home = () => {
  const [isSignInActive, setIsSignInActive] = useState(false);

  const handleSignInPress = () => {
    setIsSignInActive(true);
  };

  const handleSignUpPress = () => {
    setIsSignInActive(false);
  };

  return (
        <ImageBackground source={SubtlePrism} style={styles.background}>
          <View style={styles.welcomeMessage}>
            <Text style={styles.welcomeText}>HOME!</Text>
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              onPress={handleSignInPress}
              style={[
                styles.signinButton,
                { backgroundColor: isSignInActive ? "#007aff" : "transparent" },
              ]}
            >
              <Link href={"/(tabs)/home"}>
                <Text style={styles.text}>Sign In</Text>
              </Link>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSignUpPress}
              style={[
                styles.signupButton,
                {
                  backgroundColor: !isSignInActive ? "#007aff" : "transparent",
                },
              ]}
            >
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  welcomeMessage: {
    borderColor: Colors.bluee,
    height: 80,
    marginTop: 301,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: Colors.white,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    marginTop: 320,
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
    color: Colors.white,
  },

  signinButton: {
    height: 90,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 30,
  },
  signupButton: {
    height: 90,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
  },
});

export default Home;
