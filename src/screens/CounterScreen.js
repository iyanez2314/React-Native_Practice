import react, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "Inc":
      return { ...state, count: state.count + action.payload };
    case "Dec":
      return state.counter < 0
        ? state
        : { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "Inc", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Dec", payload: 1 });
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default CounterScreen;
