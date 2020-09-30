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
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
    marginHorizontal: 18,
    fontSize: 15,
    // borderWidth: 1,
    // borderRadius: 3,
    // borderColor: "#989898",
  },
});
