/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MotiView, useAnimationState } from "moti";
import { Shadow } from "react-native-shadow-2";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

function AuthMain(props) {
  const [mode, setMode] = useState("LoginScreen");
  const [ticked, setTicked] = useState(false);
  const [countries, setCountries] = useState();
  const [showCountryModal, setShowCountryModal] = useState();

  /* animation State */
  const animationState = useAnimationState({
    loginScreen: {
      height: height * 0.5,
    },
    SignUpScreen: {
      height: height * 0.8,
    },
  });

  /* render */
  const LoginScreen = () => {
    return (
      <MotiView
        state={animationState}
        style={{
          marginTop: 10,
          height: height * 0.5,
          marginHorizontal: 20,
        }}
      >
        <Shadow distance={15}>
          <View style={styles.authContainer}>
            <View
              style={{
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 30 }}>Sign in</Text>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 50 }}>
              <View
                style={{
                  backgroundColor: "#e5e5e5",
                  height: 50,
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="email"
                    size={24}
                    color="black"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TextInput placeholder="Email" />
                  </View>
                </View>
              </View>
              {/* password */}
              <View
                style={{
                  backgroundColor: "#e5e5e5",
                  height: 50,
                  marginTop: 10,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons
                    name="account"
                    size={24}
                    color="black"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TextInput placeholder="Password" secureTextEntry />
                  </View>
                </View>

                <View style={{ marginRight: 10 }}>
                  <MaterialCommunityIcons
                    name="eye-outline"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={{ flexDirection: "row-reverse", marginTop: 10 }}>
                <Text style={{ color: "#00d2e0", fontSize: 15 }}>
                  Forgot Password?
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#4e55af",
                  height: 50,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Shadow>
      </MotiView>
    );
  };

  const SignUpScreen = () => {
    return (
      <MotiView
        state={animationState}
        style={{
          marginTop: 10,
          marginHorizontal: 20,
        }}
      >
        <Shadow distance={15}>
          <View style={styles.authContainer2}>
            <View
              style={{
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 30 }}>
                Create an account
              </Text>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 20 }}>
              {/* name */}
              <View
                style={{
                  backgroundColor: "#e5e5e5",
                  height: 50,
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="account"
                    size={24}
                    color="black"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TextInput placeholder="Email" />
                  </View>
                </View>
              </View>
              {/* email */}
              <View
                style={{
                  backgroundColor: "#e5e5e5",
                  height: 50,
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="email"
                    size={24}
                    color="black"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TextInput placeholder="Email" />
                  </View>
                </View>
              </View>
              {/* phone number */}
              <View
                style={{
                  backgroundColor: "#e5e5e5",
                  height: 50,
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="phone"
                    size={24}
                    color="black"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TextInput placeholder="Email" />
                  </View>
                </View>
              </View>
              {/* Country selector */}
              <View
                style={{
                  backgroundColor: "#e5e5e5",
                  height: 50,
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="earth"
                    size={24}
                    color="black"
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TextInput placeholder="Email" />
                  </View>
                </View>
              </View>
              {/* password */}
              <View
                style={{
                  backgroundColor: "#e5e5e5",
                  height: 50,
                  marginTop: 10,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons name="lock" size={24} color="black" />
                  <View style={{ marginLeft: 10 }}>
                    <TextInput placeholder="Password" secureTextEntry />
                  </View>
                </View>

                <View style={{ marginRight: 10 }}>
                  <MaterialCommunityIcons
                    name="eye-outline"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                  marginHorizontal: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  onPress={() => setTicked(!ticked)}
                  name={ticked ? "checkbox-marked" : "checkbox-blank-outline"}
                  size={24}
                  color="#4e55af"
                />
                <Text style={{ color: "black" }}>
                  {" "}
                  By continuing, you accept our
                  <Text
                    style={{
                      color: "grey",
                      textDecorationLine: "underline",
                    }}
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Text>
                  {"  "}
                  and{" "}
                  <Text
                    style={{
                      color: "grey",
                      textDecorationLine: "underline",
                    }}
                  >
                    Terms of Use
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#4e55af",
                  height: 50,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Shadow>
      </MotiView>
    );
  };

  const AuthContainer = () => {
    if (mode === "LoginScreen") {
      return <LoginScreen />;
    } else {
      return <SignUpScreen />;
    }
  };

  const AuthContainerFooter = () => {
    if (mode === "LoginScreen") {
      return (
        <View
          style={{
            margintop: 50,
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Dont have an account?{" "}
            <Text
              onPress={() => console.log("press")}
              style={{ color: "#00d2e0" }}
            >
              Create one{" "}
            </Text>
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            margintop: 50,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 0,
          }}
        >
          <Text>
            Already have an account?{" "}
            <Text
              onPress={() => console.log("press")}
              style={{ color: "#00d2e0" }}
            >
              Sign in
            </Text>
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
      {/* Auth container */}
      <AuthContainer />
      {/* auth container footer */}
      <View style={{ height: 25 }}></View>
      <AuthContainerFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer2: {
    width: width * 0.9,
    borderRadius: 20,
    backgroundColor: "#f7f7f7",
    height: height * 0.65,
  },
  authContainer: {
    width: width * 0.9,
    borderRadius: 20,
    backgroundColor: "#f7f7f7",
    height: height * 0.5,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
});

export default AuthMain;
