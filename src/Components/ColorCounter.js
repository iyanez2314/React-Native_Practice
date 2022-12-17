import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ colorTitle, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{colorTitle}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${colorTitle}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${colorTitle}`} />
    </View>
  );
};

const Styles = StyleSheet.create({});

export default ColorCounter;
