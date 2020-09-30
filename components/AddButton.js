import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AddButton() {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DC143C",
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 40,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
});
