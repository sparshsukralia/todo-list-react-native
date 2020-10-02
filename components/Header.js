import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>To-Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 50,
    backgroundColor: "#6699FF",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 3,
  },
});
