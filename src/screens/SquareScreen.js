import react, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT = 15;

/**
 *
 * @param {*} state {red: number, green: number, blue: number}
 * @param {*} action { colorToChnage: 'red' || 'green' || 'blue', amount: 15 || -15}
 */
const reducer = (state, action) => {
  switch (action.colorToChnage) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state; // Object destructuring

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChnage: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChnage: "red", amount: -1 * COLOR_INCREMENT })
        }
        colorTitle="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChnage: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChnage: "green", amount: -1 * COLOR_INCREMENT })
        }
        colorTitle="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChnage: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChnage: "blue", amount: -1 * COLOR_INCREMENT })
        }
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
