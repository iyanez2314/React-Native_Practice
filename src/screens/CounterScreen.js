import react, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CounterScreen = () => {
  const [Counter, setCounter] = useState(0);

  function IncreaseCount() {
    setCounter((prevCount) => prevCount + 1);
  }

  function DecreaseCounter() {
    setCounter((prevCount) => prevCount - 1);
  }

  return (
    <View>
      <Button title="Increase" onPress={IncreaseCount} />
      <Button title="Decrease" onPress={DecreaseCounter} />
      <Text>Current Count: {Counter}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default CounterScreen;
