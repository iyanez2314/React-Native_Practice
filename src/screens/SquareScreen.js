import react, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red, green, blue);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        colorTitle="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        colorTitle="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        colorTitle="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SquareScreen;
