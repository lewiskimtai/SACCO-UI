import Dashboard from "@/app/(tabs)/(sacco)/dashboard";
import SaccoChat from "@/app/(tabs)/(sacco)/discussion";
import SaccoMembers from "@/app/(tabs)/(sacco)/members";
import Statement from "@/app/(tabs)/(sacco)/statement";
import { Link } from "expo-router";
import { SetStateAction, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MyCustTabs = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabPress = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Link href={"/(tabs)/(sacco)/dashboard"} asChild>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Dashboard" && styles.activeTab]}
            onPress={() => {}}
          >
            <Text style={styles.tabText}>Dashboard</Text>
          </TouchableOpacity>
        </Link>

        <Link href={"/(tabs)/(sacco)/members"} asChild>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Members" && styles.activeTab]}
          onPress={() => {}}
        >
          <Text style={styles.tabText}>Members</Text>
        </TouchableOpacity>
        </Link>
        
        <Link href={"/(tabs)/(sacco)/statement"} asChild>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Statment" && styles.activeTab]}
          onPress={() => {}}
        >
          <Text style={styles.tabText}>Statment</Text>
        </TouchableOpacity>
        </Link>
        
        <Link href={"/(tabs)/(sacco)/discussion"} asChild>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Discussion" && styles.activeTab]}
          onPress={() => {}}
        >
          <Text style={styles.tabText}>Discussion</Text>
        </TouchableOpacity>
        </Link>
      </View>
      {/* Content area */}
      {activeTab === "Dashboard" && <Dashboard />}
      {activeTab === "Members" && <SaccoMembers />}
      {activeTab === "Statment" && <Statement />}
      {activeTab === "Discussion" && <SaccoChat />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0",
  },
  tab: {
    padding: 15,
    flex: 1,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#007bff",
  },
  tabText: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default MyCustTabs;
