import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const icon = {
  deposit: (props: any) => (
    <MaterialCommunityIcons name="cash-plus" size={24} {...props} />
  ),
  home: (props: any) => <Ionicons name="home" size={24} {...props} />,
  withdraw: (props: any) => (
    <MaterialCommunityIcons name="cash-minus" size={24} {...props} />
  ),
};
