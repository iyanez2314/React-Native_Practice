import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>The score of this image is a {imageScore}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default ImageDetail;
