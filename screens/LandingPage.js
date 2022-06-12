/** @format */

import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

function LandingPage(props) {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 120, paddingTop: 300 }}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Welcome to</Text>
        <Text style={styles.titleText}>Magaret</Text>
      </View>
      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.startText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.already}>
        <Text style={styles.alreadyText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  already: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  alreadyText: {
    color: "#4e55af",
  },
  startText: {
    color: "white",
    fontSize: 17,
  },
  startBtn: {
    backgroundColor: "#4e55af",
    height: 45,
    width: "85%",
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
    marginRight: 20,
    borderRadius: 15,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "700",
  },
});

export default LandingPage;
