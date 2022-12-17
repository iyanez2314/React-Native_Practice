import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Freind1",
      age: 20,
    },
    {
      name: "Freind2",
      age: 22,
    },
    {
      name: "Freind3",
      age: 26,
    },
    {
      name: "Freind4",
      age: 34,
    },
    {
      name: "Freind5",
      age: 45,
    },
    {
      name: "Freind6",
      age: 32,
    },
    {
      name: "Freind7",
      age: 56,
    },
    {
      name: "Freind8",
      age: 44,
    },
    {
      name: "Freind9",
      age: 67,
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={Styles.textStyle}>
              {item.name} is {item.age} years old
            </Text>
          );
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
