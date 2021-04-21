import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Styles from "./styles";

const FloatingButton = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("NewTweet");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={Styles.button}
      onPress={handleClick}
    >
      <MaterialCommunityIcons name="feather" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
