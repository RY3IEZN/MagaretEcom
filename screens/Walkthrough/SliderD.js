/** @format */

import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MotiImage, useDynamicAnimation } from "moti";

function SliderD({ animate }) {
  const MotiImage1 = useDynamicAnimation(() => ({
    top: "40%",
    left: "15%",
  }));
  const MotiImage2 = useDynamicAnimation(() => ({
    top: "58%",
    left: "25%",
  }));
  const MotiImage3 = useDynamicAnimation(() => ({
    top: "41%",
    left: "10%",
  }));
  const MotiImage4 = useDynamicAnimation(() => ({
    top: "27%",
    left: "90%",
  }));

  useEffect(() => {
    if (animate) {
      MotiImage1.animateTo({
        top: "10%",
        left: "15%",
      });
      MotiImage2.animateTo({
        top: "60%",
        left: "45%",
      });
      MotiImage3.animateTo({
        top: "-27%",
        left: "36%",
      });
      MotiImage4.animateTo({
        top: "-29%",
        left: "49%",
      });
    }
  }, [animate]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/walkthrough/w4/walkthrough_04_01.png")}
        style={[
          styles.image,
          { top: "50%", left: "20%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage1}
        source={require("../../assets/walkthrough/w4/walkthrough_04_02.png")}
        style={[
          styles.image,
          { top: "30%", left: "50%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage2}
        source={require("../../assets/walkthrough/w4/walkthrough_04_03.png")}
        style={[
          styles.image,
          { top: "13%", left: "87%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage3}
        source={require("../../assets/walkthrough/w4/walkthrough_04_03.png")}
        style={[
          styles.image,
          { top: "37%", left: "63%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage4}
        source={require("../../assets/walkthrough/w4/walkthrough_04_04.png")}
        style={[
          styles.image,
          { top: "37%", left: "63%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SliderD;
