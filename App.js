import React from "react";
import { StyleSheet } from "react-native";
import { ButtomTabNavigation } from "./navigation/ButtomTabNavigation";

export default function App() {
  return <ButtomTabNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
