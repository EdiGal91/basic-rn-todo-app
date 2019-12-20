import React from "react";
import { View } from "react-native";
import { Todo } from "./Todo";

export const Todos = ({ todos }) => {
  return (
    <View>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </View>
  );
};
