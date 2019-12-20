import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todos } from "./src/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    if (!title) {
      return;
    }
    const id = Date.now().toString();
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id,
        title
      }
    ]);
    console.log(todos.length, id, title);
  };

  return (
    <View>
      <Navbar title="Todo App"></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <Todos todos={todos}></Todos>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
