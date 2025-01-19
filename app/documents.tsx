import { Outlet } from "@remix-run/react";
import { View } from "react-native";

function Documents() {
  return (
    <View>
      <Outlet />
    </View>
  );
}

export default Documents;
