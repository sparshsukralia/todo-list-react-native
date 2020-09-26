import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Sparsh");
  const [age, setAge] = useState("21");

  const inputHandler = (e) => {
    if (e.key === "Enter") {
      setName(e.value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is:</Text>
      <View style={styles.inputButton}>
        <TextInput
          placeholder="e.g. John Doe"
          style={styles.input}
          onChangeText={(e) => setName(e)}
        />
        <Button title="Enter" />
      </View>
      <Text>
        Name: {name}, Age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "darkslateblue",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    width: 200,
    margin: 10,
  },
  inputButton: {
    display: "flex",
    flexDirection: "row",
  },
});
