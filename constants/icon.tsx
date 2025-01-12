import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const icon = {
  saccos: (props: any) => <FontAwesome name="group" size={24} {...props} />,
  home: (props: any) => <Ionicons name="home" size={24} {...props} />,
  loans: (props: any) => (
    <FontAwesome6 name="hand-holding-dollar" size={24} {...props} />
  ),
};
