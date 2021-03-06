import React, { useState } from "react";
import AddButton from "./AddButton";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={changeHandler}
      />
      <AddButton submitHandler={submitHandler} text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 0.9,
    backgroundColor: "#fff",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderColor: "#696969",
  },
});
