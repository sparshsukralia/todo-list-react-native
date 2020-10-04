import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{item.text}</Text>
        <MaterialIcons
          style={styles.icon}
          name="delete"
          size={30}
          color="#cc0000"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginTop: 8,
  },
  item: {
    flex: 0.9,
    color: "black",
    backgroundColor: "#F0F0F0",
    padding: 15,
    marginTop: 10,
    marginHorizontal: 18,
    marginRight: 0,
    fontSize: 15,
    borderRadius: 3,
    // borderWidth: 0.1,
    borderLeftWidth: 5,
    borderColor: "#3333FF",
  },
});
