import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const Todo = ({ todo }) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
      <Button title="X" />
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
