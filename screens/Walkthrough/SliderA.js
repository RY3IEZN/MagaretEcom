/** @format */

import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import constants from "../../data/constants";

const { width, height } = Dimensions.get("window");

function SliderA(props) {
  const [row1Images, setRow1Images] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ]);

  const [row2Images, setRow2Images] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);
  const [currentPostion, setCurrentPosition] = useState(0);
  const [currentPostion2, setCurrentPosition2] = useState(0);

  const row1FlatListRef = useRef();
  const row2FlatListRef = useRef();

  useEffect(() => {
    let positionTimer;
    /* slider 1 */
    const timer = () => {
      positionTimer = setTimeout(() => {
        setCurrentPosition((prevPosition) => {
          const position = Number(prevPosition) + 1;
          row1FlatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });
          const maxOffset = constants.walkthrough_01_01_images.length * 120;
          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;

            row2FlatListRef?.current?.scrollToOffset({
              offset,
              animated: false,
            });
            return offset;
          } else {
            return position;
          }
        });
        /* slider 2 */
        setCurrentPosition2((prevPosition) => {
          const position = Number(prevPosition) + 1;
          row2FlatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });
          const maxOffset = constants.walkthrough_01_01_images.length * 120;
          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;

            row1FlatListRef?.current?.scrollToOffset({
              offset,
              animated: false,
            });
            return offset;
          } else {
            return position;
          }
        });

        timer();
      }, 30);
    };
    timer();

    return () => {
      clearTimeout(positionTimer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={row1FlatListRef}
        decelerationRate="fast"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        listKey="sliderA"
        keyExtractor={(_, index) => `slider_${index}`}
        data={row1Images}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 120,
              }}
            >
              <Image
                source={item}
                style={{
                  width: 100,
                  height: 100,
                  marginHorizontal: 5,
                }}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={row2FlatListRef}
        decelerationRate="fast"
        style={{
          marginTop: 5,
          transform: [{ rotate: "180deg" }],
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        listKey="sliderB"
        keyExtractor={(_, index) => `slider2_${index}`}
        data={row2Images}
        scrollEnabled
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 120,
                marginTop: 10,
              }}
            >
              <Image
                source={item}
                style={{
                  width: 100,
                  height: 100,
                  marginHorizontal: 5,
                  transform: [{ rotate: "180deg" }],
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SliderA;
FlatList;
