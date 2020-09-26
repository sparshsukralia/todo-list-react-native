import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Mark");

  const clickHandler = () => {
    setName("Dustin");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});
