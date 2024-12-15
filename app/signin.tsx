import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SubtlePrism } from "@/constants/Icons";
import Colors from "@/constants/Colors";
import { Link, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useState } from "react";

const SignIn = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={SubtlePrism} style={styles.background}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={handleGoBack}
          >
            <Ionicons
              name="arrow-back-outline"
              size={45}
              style={{ color: Colors.white }}
            />
          </TouchableOpacity>
          <View style={styles.welcomemessageContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.welcomeText}>Back</Text>
          </View>

          {/* SIGN IN FORM */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons
                name="mail-outline"
                size={30}
                style={{ color: Colors.white }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor={Colors.grey}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <SimpleLineIcons
                name="lock"
                size={30}
                style={{ color: Colors.white }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor={Colors.grey}
                secureTextEntry={secureEntry}
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureEntry((prev) => !prev);
                }}
              >
                <SimpleLineIcons
                  name="eye"
                  size={20}
                  style={{ color: Colors.grey }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
              <Text style={styles.accountText}>Dont have an account?</Text>
              <Link href={"/signup"}>
                <Text style={styles.signupText}>Sign Up</Text>
              </Link>
            </View>
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
    padding: 15,
  },
  backButtonContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomemessageContainer: {
    marginVertical: 30,
  },
  welcomeText: {
    fontSize: 50,
    color: Colors.white,
  },
  formContainer: {
    marginTop: 180,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.white,
    borderRadius: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    color: Colors.black,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: Colors.blue,
    fontWeight: "900",
    fontSize: 18,
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: Colors.bluee,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 10,
  },
  accountText: {
    color: Colors.grey,
    fontSize: 20,
  },
  signupText: {
    color: Colors.grey,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SignIn;
