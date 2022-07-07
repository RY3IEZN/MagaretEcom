/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import LandingPage from "../screens/LandingPage";
import Walkthrough from "../screens/Walkthrough/Walkthrough";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Navigators(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LandingPage"
          component={LandingPage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Walkthrough"
          component={Walkthrough}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigators;
