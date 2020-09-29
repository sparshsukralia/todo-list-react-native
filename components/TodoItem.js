import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item }) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 350,
    backgroundColor: "pink",
    padding: 20,
    marginTop: 16,
    fontSize: 20,
    borderRadius: 8,
  },
});
