import * as React from "react";
import { StyleSheet, View } from "react-native";
import Feed from "../components/Feed";
import FloatingButton from "../components/Feed/FloatingButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
