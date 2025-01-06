import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Crbgraph from "@/componets/Crbgraph";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const [isDespositModalVisible, setIsDespositModalVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [withdrawalSuccess, setWithdrawalSuccess] = useState(false);
  
  const [despositSuccess, setDespositSuccess] = useState(false);

  const handleWithdrawPress = () => {
    setIsModalVisible(true);
  };

  const handleDespositPress = () => {
    setIsDespositModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setAmount("");
    setWithdrawalSuccess(false); // Reset success state
  };

  const handleCloseDepositModal = () => {
    setIsDespositModalVisible(false);
    setAmount("");
    setDespositSuccess(false); // Reset success state
  };

  const handleWithdraw = async () => {
    try {
      // Simulate successful withdrawal (replace with your actual API call)
      // ... your withdrawal API call logic here ...
      // Assuming the API call is successful
      setWithdrawalSuccess(true);

      // No need to request notification permissions here (commented out)
      // const { status: existingStatus } = await Permissions.getAsync(
      //   Permissions.NOTIFICATIONS
      // );
      // ... rest of notification logic (commented out)
    } catch (error) {
      console.error("Error:", error);
      // Handle errors, e.g., display an error message to the user
      alert("Withdrawal failed. Please try again later.");
    }
  };

  const handleDeposit = async () => {
    try {
      // Simulate successful withdrawal (replace with your actual API call)
      // ... your withdrawal API call logic here ...
      // Assuming the API call is successful
      setDespositSuccess(true);

      // No need to request notification permissions here (commented out)
      // const { status: existingStatus } = await Permissions.getAsync(
      //   Permissions.NOTIFICATIONS
      // );
      // ... rest of notification logic (commented out)
    } catch (error) {
      console.error("Error:", error);
      // Handle errors, e.g., display an error message to the user
      alert("Deposit failed. Please try again later.");
    }
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
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
            <TouchableOpacity
              onPress={() => {}}
              style={styles.loanrequestButton}
            >
              <Text style={styles.loanRequest}>Request for a Loan</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.walletbalanceWrapper}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="wallet"
                  size={24}
                  style={{ color: Colors.black }}
                />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>
                  Wallet <Text style={{ fontWeight: "bold" }}>Balance</Text>
                </Text>
              </View>

              <Text style={{ fontSize: 22, fontWeight: "800" }}>UGX</Text>
              <Text>
                <Text style={{ fontSize: 30, fontWeight: "900" }}>
                  500,000.
                </Text>
                <Text style={{ fontSize: 21 }}>00</Text>
              </Text>
            </View>
            <View style={styles.crbgraphWrapper}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>CRB SCORE</Text>
              <Crbgraph />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            <View>
              <TouchableWithoutFeedback onPress={handleCloseDepositModal}>
                <View style={{ marginTop: 10, width: 80 }}>
                  <TouchableOpacity
                    onPress={handleDespositPress}
                    style={styles.withdrawButton}
                  >
                    <Text style={styles.withdrawRequest}>Deposit</Text>
                  </TouchableOpacity>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isDespositModalVisible}
                  >
                    <TouchableWithoutFeedback onPress={handleCloseDepositModal}>
                      <View style={styles.modalContainer}>
                        {/* Backdrop component to close modal on press outside */}
                        <TouchableOpacity
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            opacity: 0.5,
                          }}
                          onPress={handleCloseDepositModal}
                        />

                        <View
                          style={[
                            styles.modalView,
                            {
                              width: windowWidth * 0.8,
                              height: windowHeight * 0.4,
                            },
                          ]}
                        >
                          {despositSuccess ? (
                            <View>
                              <Text style={styles.successMessage}>
                                Deposit Successful!
                              </Text>
                              {/* No notification functionality here */}
                            </View>
                          ) : (
                            <>
                              <Text style={styles.modalTitle}>
                                Enter Deposit Amount
                              </Text>
                              <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="Enter amount"
                                value={amount}
                                onChangeText={setAmount}
                              />
                              <TouchableOpacity
                                style={styles.withdrawButtonModal}
                                onPress={handleDeposit}
                              >
                                <Text style={styles.withdrawRequest}>
                                  Deposit
                                </Text>
                              </TouchableOpacity>
                            </>
                          )}
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </Modal>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={handleCloseModal}>
                <View style={{ marginTop: 10, width: 80 }}>
                  <TouchableOpacity
                    onPress={handleWithdrawPress}
                    style={styles.withdrawButton}
                  >
                    <Text style={styles.withdrawRequest}>Withdraw</Text>
                  </TouchableOpacity>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                  >
                    <TouchableWithoutFeedback onPress={handleCloseModal}>
                      <View style={styles.modalContainer}>
                        {/* Backdrop component to close modal on press outside */}
                        <TouchableOpacity
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            opacity: 0.5,
                          }}
                          onPress={handleCloseModal}
                        />

                        <View
                          style={[
                            styles.modalView,
                            {
                              width: windowWidth * 0.8,
                              height: windowHeight * 0.4,
                            },
                          ]}
                        >
                          {withdrawalSuccess ? (
                            <View>
                              <Text style={styles.successMessage}>
                                Withdrawal Successful!
                              </Text>
                              {/* No notification functionality here */}
                            </View>
                          ) : (
                            <>
                              <Text style={styles.modalTitle}>
                                Enter Withdrawal Amount
                              </Text>
                              <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="Enter amount"
                                value={amount}
                                onChangeText={setAmount}
                              />
                              <TouchableOpacity
                                style={styles.withdrawButtonModal}
                                onPress={handleWithdraw}
                              >
                                <Text style={styles.withdrawRequest}>
                                  Withdraw
                                </Text>
                              </TouchableOpacity>
                            </>
                          )}
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </Modal>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </SafeAreaView>
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
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 110,
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
  },
  loanrequestButton: {
    backgroundColor: Colors.bluee,
    borderWidth: 1,
    borderColor: Colors.bluee,
    padding: 8,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  loanRequest: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.white,
  },
  walletbalanceWrapper: {
    gap: 10,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    width: 180,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 10,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  crbgraphWrapper: {
    marginLeft: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    width: 180,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  withdrawButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bluee,
    borderWidth: 1,
    borderColor: Colors.bluee,
    padding: 8,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  withdrawRequest: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: "80%",
  },
  withdrawButtonModal: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
  },
  successMessage: {
    color: "green",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Home;
