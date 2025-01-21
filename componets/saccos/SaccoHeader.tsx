import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SaccoHeader() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.headerWrapper}>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 28, fontWeight: "900" }}>SACCO NAME</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            justifyContent: "space-between"
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>SAVINGS</Text>
            <Text style={{ fontSize: 28, fontWeight: "900" }}>2,000,000</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 17, fontWeight: "500" }}>
                INTEREST EARNED
              </Text>
              <View
                style={{ flexDirection: "row", gap: 30, alignItems: "center" }}
              >
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
            <View style={styles.container}>
              <TouchableOpacity onPress={toggleModal}>
                <FontAwesome name="bars" size={24} color="black" />
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
              >
                <TouchableWithoutFeedback onPress={toggleModal}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Link href={"/LoanRequest"} asChild>
                        <TouchableOpacity style={styles.modalTextButton}>
                          <Text style={styles.modalText}>Request a Loan</Text>
                        </TouchableOpacity>
                      </Link>

                      <Link href={"/AddNewMember"} asChild>
                        <TouchableOpacity style={styles.modalTextButton}>
                          <Text style={styles.modalText}>Add new member</Text>
                        </TouchableOpacity>
                      </Link>

                      <Link href={"/Approvals"} asChild>
                        <TouchableOpacity style={styles.modalTextButton}>
                          <Text style={styles.modalText}>Approvals </Text>
                        </TouchableOpacity>
                      </Link>

                      <Link href={"/documents"} asChild>
                        <TouchableOpacity style={styles.modalTextButton}>
                          <Text style={styles.modalText}>Sacco Documents</Text>
                        </TouchableOpacity>
                      </Link>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 90,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  container: {
    paddingTop: 10,
    marginLeft: 30
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 200,
    marginBottom: 500,
    flexDirection: "column",
    marginLeft: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    gap: 10,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "900",
  },
  modalTextButton: {
    width: 150,
    paddingVertical: 10,
  },
});
