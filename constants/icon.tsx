import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export const icon = {
  deposit: (props: any) => <FontAwesome name="group" size={24} {...props} />,
  home: (props: any) => <Ionicons name="home" size={24} {...props} />,
  withdraw: (props: any) => (
    <MaterialCommunityIcons name="cash-minus" size={24} {...props} />
  ),
};
