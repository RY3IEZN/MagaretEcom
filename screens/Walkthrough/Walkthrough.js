/** @format */

import React, { useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import constants from "../../data/constants";
import SliderA from "./SliderA";
import SliderB from "./SliderB";
import SliderC from "./SliderC";
import SliderD from "./SliderD";
const { width, height } = Dimensions.get("window");

function Walkthrough(props) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sliderbAnimated, setSliderbAnimated] = useState(false);
  const [slidercAnimated, setSlidercAnimated] = useState(false);
  const [sliderdAnimated, setSliderdAnimated] = useState(false);

  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    if (viewableItems[0].index == 1) {
      setSliderbAnimated(true);
      setSlidercAnimated(true);
      setSliderdAnimated(true);
    }
  });

  const Dots = () => {
    const dotsPosition = Animated.divide(scrollX, width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.walkthrough.map((item, index) => {
          const dotColor = dotsPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ["grey", "#4e55af", "grey"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={{
                borderRadius: 5,
                marginHorizontal: 5,
                height: 10,
                width: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: width,
                justifyContent: "center",
              }}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                {index === 0 && <SliderA />}
                {index === 1 && <SliderB animate={sliderbAnimated} />}
                {index === 2 && <SliderC animate={slidercAnimated} />}
                {index === 3 && <SliderD animate={sliderdAnimated} />}
              </View>

              {/* title */}
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: height * 0.13,
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 30,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "400",
                    color: "grey",
                    fontSize: 15,
                    marginTop: 5,
                  }}
                >
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: height * 0.1,
          paddingHorizontal: 20,
        }}
      >
        <Dots />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 50,
          marginHorizontal: 30,
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "lightgrey",
            height: 45,
            width: "45%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            elevation: 5,
          }}
        >
          <Text style={{ color: "#4e55af", fontSize: 15, fontWeight: "800" }}>
            Join Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#4e55af",
            height: 45,
            width: "45%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            elevation: 5,
          }}
        >
          <Text style={{ color: "lightgrey", fontSize: 15, fontWeight: "800" }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
});

export default Walkthrough;
