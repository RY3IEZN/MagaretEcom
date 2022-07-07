/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigators from "./Navigations/Navigators";
import AuthMain from "./screens/Auth/AuthMain";
import LandingPage from "./screens/LandingPage";
import Walkthrough from "./screens/Walkthrough/Walkthrough";

export default function App() {
  return <AuthMain />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
