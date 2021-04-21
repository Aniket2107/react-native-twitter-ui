import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.tint,
    position: "absolute",
    bottom: 35,
    right: -20,
    width: 60,
    height: 60,
    borderRadius: 50.0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Styles;
