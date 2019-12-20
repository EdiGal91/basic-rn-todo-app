import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Todo = ({ todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5
  }
});
