import { Dimensions, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';

const DepositandWithdrawButton = () => {
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
    <View
      style={{
        flexDirection: "row",
        gap: 4,
      }}
    >
      <View>
        <TouchableWithoutFeedback onPress={handleCloseDepositModal}>
          <View style={{ marginTop: 10, width: 90 }}>
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
                          <Text style={styles.withdrawRequest}>Deposit</Text>
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
          <View style={{ marginTop: 10, width: 90 }}>
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
                          <Text style={styles.withdrawRequest}>Withdraw</Text>
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
        <TouchableWithoutFeedback>
          <View style={{ marginTop: 10, width: 90 }}>
            <TouchableOpacity
              style={styles.withdrawButton}
            >
              <Text style={styles.withdrawRequest}>Send</Text>
            </TouchableOpacity>

          </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback>
          <View style={{ marginTop: 10, width: 90 }}>
            <TouchableOpacity
              style={styles.withdrawButton}
            >
              <Text style={styles.withdrawRequest}>Request Loan</Text>
            </TouchableOpacity>

          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default DepositandWithdrawButton;

const styles = StyleSheet.create({
    
      withdrawButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.bluee,
        borderWidth: 1,
        borderColor: Colors.bluee,
        paddingLeft: 2,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
        shadowRadius: 10, // Reduced shadowRadius
        shadowOpacity: 0.3, // Reduced shadowOpacity
        elevation: Platform.OS === "android" ? 5 : 0,
      },
      withdrawRequest: {
        fontSize: 16,
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
})