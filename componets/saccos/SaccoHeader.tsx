import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Link } from "expo-router";

export default function SaccoHeader() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.headerWrapper}>
      <View>
        <Text style={{ fontSize: 28, fontWeight: "900" }}>SACCO NAME</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>SAVINGS</Text>
          <Text style={{ fontSize: 28, fontWeight: "900" }}>2,000,000</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              INTEREST EARNED
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 25,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "900", color: "green" }}>
                200,000
              </Text>
              <Text style={{ fontSize: 17, fontWeight: "900", color: "green" }}>
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
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 80,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  container: {},
  centeredView: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  modalView: {
    width: 150,
    marginTop: 70,
    flexDirection: "column",

    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    gap: 20,
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
    fontSize: 18,
    fontWeight: "900",
  },
  modalTextButton: {
    width: 150,
  },
});
