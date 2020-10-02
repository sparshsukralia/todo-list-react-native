import React from "react";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Make a tutorial", key: "1" },
    { text: "Binge Watch Sherlock", key: "2" },
    { text: "Make an app", key: "3" },
  ]);

  // We're checking the key that we tapped on with the item's key in the array
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  // This function takes the input text and add that to the todos array
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      {/* to-do input */}
      <AddTodo submitHandler={submitHandler} />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6699FF",
    height: 900,
  },
  content: {
    // padding: 10,
  },
  list: {
    marginTop: 30,
    backgroundColor: "#fff",
    height: 500,
    paddingTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
