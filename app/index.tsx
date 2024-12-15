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
import { Link } from "expo-router";

const Index = () => {
  const [isSignInActive, setIsSignInActive] = useState(false);

  const handleSignInPress = () => {
    setIsSignInActive(true);
  };

  const handleSignUpPress = () => {
    setIsSignInActive(false);
  };


  return (
    <ImageBackground source={SubtlePrism} style={styles.background}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.welcomemessageContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
          </View>

          <View style={styles.signinAndSignupContainer}>
            <TouchableOpacity
              onPress={handleSignInPress}
              style={[
                styles.signinButton,
                {
                  backgroundColor: isSignInActive
                    ? Colors.bluee
                    : "transparent",
                },
              ]}
            >
              <Link href={"/signin"}>
                <Text style={styles.text}>Sign In</Text>
              </Link>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSignUpPress}
              style={[
                styles.signupButton,
                {
                  backgroundColor: !isSignInActive
                    ? Colors.bluee
                    : "transparent",
                },
              ]}
            >
              <Link href={"/signup"}>
                <Text style={styles.text}>Sign UP</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
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
    padding: 8,
  },
  welcomemessageContainer: {
    marginVertical: 80,
    
  },
  welcomeText: {
    fontSize: 50,
    color: Colors.white,
  },
  signinAndSignupContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 100,
    marginVertical: 565,
    flexDirection: "row",
  
    borderColor: Colors.bluee,
  },
  text: {
    fontSize: 30,
    color: Colors.tintColor,
    fontWeight: "900",

  },

  signinButton: {
    height: 90,
    width: 230,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 30,
    
    borderColor: Colors.bluee,
  },
  signupButton: {
    height: 90,
    width: 230,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    
    borderColor: Colors.bluee,
  },
});

export default Index;
