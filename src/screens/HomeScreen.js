import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List demo"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => navigation.navigate("ColorScreen")}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => navigation.navigate("SquareScreen")}
        title="Go to Square Screen"
      />
      <Button
        onPress={() => navigation.navigate("Textscreen")}
        title="Go to Text Screen"
      />
      <Button
        onPress={() => navigation.navigate("Boxscreen")}
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
