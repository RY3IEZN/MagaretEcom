/** @format */

import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MotiImage, useDynamicAnimation } from "moti";

function SliderC({ animate }) {
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
    left: "40%",
  }));
  const MotiImage4 = useDynamicAnimation(() => ({
    top: "27%",
    left: "34%",
  }));
  const MotiImage5 = useDynamicAnimation(() => ({
    top: "27%",
    left: "76%",
  }));

  useEffect(() => {
    if (animate) {
      MotiImage1.animateTo({
        top: "25%",
        left: "15",
      });
      MotiImage2.animateTo({
        top: "30%",
        left: "10",
      });
      MotiImage3.animateTo({
        top: "10%",
        left: "45%",
      });
      MotiImage4.animateTo({
        top: "-40%",
        left: "49",
      });
      MotiImage5.animateTo({
        top: "-86%",
        left: "65%",
      });
    }
  }, [animate]);

  return (
    <View style={styles.container}>
      <MotiImage
        state={MotiImage1}
        source={require("../../assets/walkthrough/w3/walkthrough_03_01.png")}
        style={[
          styles.image,
          { top: "50%", left: "50%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage2}
        source={require("../../assets/walkthrough/w3/walkthrough_03_02.png")}
        style={[
          styles.image,
          { top: "50%", left: "50%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage3}
        source={require("../../assets/walkthrough/w1/walkthrough_01_01.png")}
        style={[
          styles.image,
          { top: "48%", left: "20%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage4}
        source={require("../../assets/walkthrough/w1/walkthrough_01_02.png")}
        style={[
          styles.image,
          { top: "19%", left: "5%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage5}
        source={require("../../assets/walkthrough/w1/walkthrough_01_07.png")}
        style={[
          styles.image,
          { top: "19%", left: "5%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overFlow: "hidden",
  },
});

export default SliderC;
