import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import DepositandWithdrawButton from './DepositandWithdrawButton';
import Ionicons from "@expo/vector-icons/Ionicons";

const WalletWrapper = () => {
  return (
    <View>
      <View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.walletbalanceWrapper}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="wallet"
                size={30}
                style={{ color: Colors.black }}
              />
              <Text style={{ fontSize: 30, marginLeft: 10 }}>
                Wallet <Text style={{ fontWeight: "bold" }}>Balance</Text>
              </Text>
            </View>

            <Text style={{ fontSize: 25, fontWeight: "800" }}>UGX</Text>
            <Text style={{ fontSize: 40, fontWeight: "900" }}>500,000</Text>
          </View>
          <DepositandWithdrawButton />
        </View>
      </View>
    </View>
  );
}

export default WalletWrapper

const styles = StyleSheet.create({walletbalanceWrapper: {
    marginTop: 5,
    gap: 10,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingRight: 10,
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 }, // Reduced shadowOffset for better visibility
    shadowRadius: 10, // Reduced shadowRadius
    shadowOpacity: 0.3, // Reduced shadowOpacity
    elevation: Platform.OS === "android" ? 5 : 0,
  },})