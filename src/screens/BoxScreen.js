import React from "react";
import { Text, View, StyleSheet, BackHandler } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 50,
    width: 50,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 50,
    width: 50,
    position: "absolute",
    top: 50,
    left: 190,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
