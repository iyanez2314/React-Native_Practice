import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/images/forest.jpg")}
        imageScore={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/images/beach.jpg")}
        imageScore={6}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/images/mountain.jpg")}
        imageScore={4}
      />
    </View>
  );
};

const Styles = StyleSheet.create({});

export default ImageScreen;
