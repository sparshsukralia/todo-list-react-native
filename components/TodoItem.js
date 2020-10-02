import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    color: "black",
    backgroundColor: "#F0F0F0",
    padding: 15,
    marginTop: 10,
    marginHorizontal: 18,
    fontSize: 15,
    borderRadius: 3,
    borderWidth: 0.1,
    borderLeftWidth: 5,
    borderColor: "#3333FF",
  },
});
