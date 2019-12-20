import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = props => (
  <View style={styles.block}>
    <TextInput style={styles.input} />
    <Button style={styles.button} title="Add" />
  </View>
);

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    padding: 10
  },
  button: {}
});
