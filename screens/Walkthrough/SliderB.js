/** @format */

import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MotiImage, useDynamicAnimation } from "moti";

function SliderB({ animate }) {
  const MotiImage1 = useDynamicAnimation(() => ({
    top: "45%",
    left: "15%",
  }));
  const MotiImage2 = useDynamicAnimation(() => ({
    top: "58%",
    left: "25%",
  }));
  const MotiImage3 = useDynamicAnimation(() => ({
    top: "61%",
    left: "40%",
  }));
  const MotiImage4 = useDynamicAnimation(() => ({
    top: "27%",
    left: "50%",
  }));
  const MotiImage5 = useDynamicAnimation(() => ({
    top: "45%",
    left: "15%",
  }));

  useEffect(() => {
    if (animate) {
      MotiImage1.animateTo({
        top: "20%",
        left: "15",
      });
      MotiImage2.animateTo({
        top: "30%",
        left: "-10",
      });
      MotiImage3.animateTo({
        top: "62%",
        left: "5",
      });
      MotiImage4.animateTo({
        top: "70%",
        left: "41",
      });
      MotiImage5.animateTo({
        top: "15%",
        left: "65",
      });
    }
  }, [animate]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/walkthrough/w2/walkthrough_02_01.png")}
        style={[
          styles.image,
          { top: "35%", left: "35%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <Image
        source={require("../../assets/walkthrough/w2/walkthrough_02_02.png")}
        style={[
          styles.image,
          { top: "50%", left: "50%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage1}
        source={require("../../assets/walkthrough/w2/walkthrough_02_03.png")}
        style={[
          styles.image,
          { top: "50%", left: "50%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage2}
        source={require("../../assets/walkthrough/w2/walkthrough_02_04.png")}
        style={[
          styles.image,
          { top: "50%", left: "50%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage3}
        source={require("../../assets/walkthrough/w2/walkthrough_02_05.png")}
        style={[
          styles.image,
          { top: "50%", left: "50%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage4}
        source={require("../../assets/walkthrough/w2/walkthrough_02_06.png")}
        style={[
          styles.image,
          { top: "50%", left: "50%", width: 106, height: 161, zIndex: 1 },
        ]}
      />
      <MotiImage
        state={MotiImage5}
        source={require("../../assets/walkthrough/w2/walkthrough_02_07.png")}
        style={[
          styles.image,
          { top: "50%", left: "50%", width: 106, height: 161, zIndex: 1 },
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
  image: {
    width: 86,
    height: 112,
    borderRadius: 24,
    position: "absolute",
  },
});

export default SliderB;
