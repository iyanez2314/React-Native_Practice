import react, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        colorTitle="Red"
      />
      <ColorCounter colorTitle="Green" />
      <ColorCounter colorTitle="Blue" />
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SquareScreen;
